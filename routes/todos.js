async function routes(fastify, options) {
  const db = fastify.sqlite.db

  function trimTitle(request, reply, done) {
    request.body.title = request.body.title.trim()
    done()
  }

  function fetchTodos(request, reply, done) {
    db.all('SELECT * FROM todos', [], (err, rows) => {
      if (err) { return done(err) }

      const todos = rows.map(row => ({
        id: row.id,
        title: row.title,
        completed: row.completed == 1,
        url: '/' + row.id
      }))
      const activeCount = todos.filter(todo => !todo.completed).length
      const completedCount = todos.length - activeCount

      reply.locals = { todos, activeCount, completedCount }
      done()
    })
  }

  function setupRoutes(fastify) {
    fastify.get('/', { preHandler: fetchTodos }, renderTodoList)
    fastify.get('/scan', renderScanPage)
    fastify.get('/active', { preHandler: fetchTodos }, renderActiveTodos)
    fastify.get('/completed', { preHandler: fetchTodos }, renderCompletedTodos)
    fastify.post('/', { preValidation: trimTitle }, createTodo)
    fastify.post('/:id(\\d+)', { preValidation: trimTitle }, updateOrDeleteTodo)
    fastify.post('/:id(\\d+)/delete', deleteTodo)
    fastify.post('/toggle-all', toggleAllTodos)
    fastify.post('/clear-completed', clearCompletedTodos)
  }

  function renderTodoList(request, reply) {
    reply.view('/templates/todo.ejs', { filter: null }, { layout: "/templates/auth.ejs" })
  }

  function renderScanPage(request, reply) {
    reply.view('/templates/scan.ejs', { filter: null }, { layout: "/templates/public.ejs" })
  }

  function renderActiveTodos(request, reply) {
    reply.locals.todos = reply.locals.todos.filter(todo => !todo.completed)
    reply.view('/templates/index.ejs', { filter: 'active' })
  }

  function renderCompletedTodos(request, reply) {
    reply.locals.todos = reply.locals.todos.filter(todo => todo.completed)
    reply.view('/templates/index.ejs', { filter: 'completed' })
  }

  function createTodo(request, reply) {
    if (request.body.title !== '') {
      db.run('INSERT INTO todos (title, completed) VALUES (?, ?)', [
        request.body.title,
        request.body.completed == true ? 1 : null
      ], err => {
        if (err) {
          reply.send(err)
          return
        }
        reply.redirect(`/todo${request.body.filter || ''}`)
      })
    } else {
      reply.redirect(`/todo${request.body.filter || ''}`)
    }
  }

  function updateOrDeleteTodo(request, reply) {
    if (request.body.title !== '') {
      db.run('UPDATE todos SET title = ?, completed = ? WHERE id = ?', [
        request.body.title,
        request.body.completed !== undefined ? 1 : null,
        request.params.id
      ], err => {
        if (err) {
          reply.send(err)
          return
        }
        reply.redirect(`/todo${request.body.filter || ''}`)
      })
    } else {
      db.run('DELETE FROM todos WHERE id = ?', [
        request.params.id
      ], err => {
        if (err) {
          reply.send(err)
          return
        }
        reply.redirect(`/todo${request.body.filter || ''}`)
      })
    }
  }

  function deleteTodo(request, reply) {
    db.run('DELETE FROM todos WHERE id = ?', [
      request.params.id
    ], err => {
      if (err) {
        reply.send(err)
        return
      }
      reply.redirect(`/todo${request.body.filter || ''}`)
    })
  }

  function toggleAllTodos(request, reply) {
    db.run('UPDATE todos SET completed = ?', [
      request.body.completed !== undefined ? 1 : null
    ], err => {
      if (err) {
        reply.send(err)
        return
      }
      reply.redirect(`/todo${request.body.filter || ''}`)
    })
  }

  function clearCompletedTodos(request, reply) {
    db.run('DELETE FROM todos WHERE completed = ?', [
      1
    ], err => {
      if (err) {
        reply.send(err)
        return
      }
      reply.redirect(`/todo${request.body.filter || ''}`)
    })
  }

  setupRoutes(fastify)
}

module.exports = routes
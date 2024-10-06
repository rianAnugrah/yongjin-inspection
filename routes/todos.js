const trimTitle = require('../middleware/trimTitle');
const fetchTodos = require('../middleware/fetchTodos');

async function routes(fastify, options) {
  const db = fastify.sqlite.db;

  fastify.get('/', { preHandler: fetchTodos }, (request, reply) => {
    reply.view('/templates/todo.ejs', { filter: null }, { layout: '/templates/auth.ejs' });
  });

  fastify.get('/scan', (request, reply) => {
    reply.view('/templates/scan.ejs', { filter: null }, { layout: '/templates/public.ejs' });
  });

  fastify.get('/active', { preHandler: fetchTodos }, (request, reply) => {
    reply.locals.todos = reply.locals.todos.filter(todo => !todo.completed);
    reply.view('/templates/index.ejs', { filter: 'active' });
  });

  fastify.get('/completed', { preHandler: fetchTodos }, (request, reply) => {
    reply.locals.todos = reply.locals.todos.filter(todo => todo.completed);
    reply.view('/templates/index.ejs', { filter: 'completed' });
  });

  fastify.post('/', { preValidation: trimTitle }, (request, reply) => {
    if (request.body.title !== '') {
      db.run('INSERT INTO todos (title, completed) VALUES (?, ?)', [
        request.body.title,
        request.body.completed ? 1 : null
      ], err => {
        if (err) {
          reply.send(err);
          return;
        }
        reply.redirect(`/${request.body.filter || ''}`);
      });
    } else {
      reply.redirect(`/${request.body.filter || ''}`);
    }
  });

  fastify.post('/:id(\\d+)', { preValidation: trimTitle }, (request, reply) => {
    if (request.body.title !== '') {
      db.run('UPDATE todos SET title = ?, completed = ? WHERE id = ?', [
        request.body.title,
        request.body.completed !== undefined ? 1 : null,
        request.params.id
      ], err => {
        if (err) {
          reply.send(err);
          return;
        }
        reply.redirect(`/${request.body.filter || ''}`);
      });
    } else {
      db.run('DELETE FROM todos WHERE id = ?', [
        request.params.id
      ], err => {
        if (err) {
          reply.send(err);
          return;
        }
        reply.redirect(`/${request.body.filter || ''}`);
      });
    }
  });

  fastify.post('/:id(\\d+)/delete', (request, reply) => {
    db.run('DELETE FROM todos WHERE id = ?', [
      request.params.id
    ], err => {
      if (err) {
        reply.send(err);
        return;
      }
      reply.redirect(`/${request.body.filter || ''}`);
    });
  });

  fastify.post('/toggle-all', (request, reply) => {
    db.run('UPDATE todos SET completed = ?', [
      request.body.completed !== undefined ? 1 : null
    ], err => {
      if (err) {
        reply.send(err);
        return;
      }
      reply.redirect(`/${request.body.filter || ''}`);
    });
  });

  fastify.post('/clear-completed', (request, reply) => {
    db.run('DELETE FROM todos WHERE completed = ?', [
      1
    ], err => {
      if (err) {
        reply.send(err);
        return;
      }
      reply.redirect(`/${request.body.filter || ''}`);
    });
  });
}

module.exports = routes;

async function fetchTodos(fastify) {
    return async (request, reply, done) => {
    const db = fastify.sqlite.db;
    db.all('SELECT * FROM todos', [], (err, rows) => {
      if (err) { return done(err); }
  
      const todos = rows.map(row => {
        return {
          id: row.id,
          title: row.title,
          completed: row.completed === 1,
          url: '/' + row.id
        };
      });
  
      const activeCount = todos.filter(todo => !todo.completed).length;
      const completedCount = todos.length - activeCount;
  
      reply.locals = {
        todos: todos,
        activeCount: activeCount,
        completedCount: completedCount
      };
      done();
    });
  }
}
  
  module.exports = fetchTodos;
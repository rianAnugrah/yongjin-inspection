const todos = require('./todos');
const home = require('./home');

async function routes(fastify, options) {
  fastify.register(todos , { prefix: "/todo" });
  fastify.register(home);
}

module.exports = routes;

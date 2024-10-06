async function routes (fastify, options) {
    
    fastify.get('/',  (request, reply) => {
      reply.view('/templates/home.ejs', { filter: null } , {layout : "/templates/public.ejs"})
    })
  
  }
  
  module.exports = routes
  
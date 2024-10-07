async function routes(fastify, options) {
   
  
    function setupRoutes(fastify) {
      fastify.get('/', renderDashboard)
    
    }
  
    function renderDashboard(request, reply) {
      reply.view('/templates/dashboard.ejs', { filter: null }, { layout: "/templates/auth.ejs" })
    }
  
  
    setupRoutes(fastify)
  }
  
  module.exports = routes
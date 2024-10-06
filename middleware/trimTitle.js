function trimTitle(request, reply, done) {
    request.body.title = request.body.title.trim();
    done();
  }
  
  module.exports = trimTitle;
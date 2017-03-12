module.exports = function(app) {

  // all other routes are handled by Angular
  app.get('/*', function(req, res) {
      res.sendFile('./layout.html', { root: __dirname + "/public"});
  });

};

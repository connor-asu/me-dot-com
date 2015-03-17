module.exports = function(grunt) {
  "use strict";

  grunt.initConfig({
    webServer: {
      port: 8090,
      rootFolder: "./www"
    }
  });

  //creates a default task
  grunt.registerTask("default", "start a web server", function() {
    var
      http = require("http"), //requiring the http module
      express = require("express"), //requiring the express module that we ran an npm install to get
      app = express(), //set the app variable to a function returned by the express module
      webServerConfig = grunt.config("webServer");
  

    this.async(); //this will start our webserver task

    app.use(express.static(webServerConfig.rootFolder));

    http.createServer(app).listen(webServerConfig.port), function() {
      grunt.log.writeln("webs server listening on port " + webServerConfig.port);
    }

  });

};
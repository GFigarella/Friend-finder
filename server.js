//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/css'));
// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);







  app.listen(port, function(){
      console.log("Listening on port " + port);
  })
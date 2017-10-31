
// DEPENDENCIES
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// EXPRESS CONFIGURATION
var app = express();
var PORT = process.env.PORT || 8080;
// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ROUTER
// Points server to a series of "route" files
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// LISTENER
// Starts the server 
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
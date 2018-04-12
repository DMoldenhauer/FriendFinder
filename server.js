//REQUIREMENTS
//-------------------------------------------------
// Your server.js file should require the basic npm packages we've used in class: express, body-parser and path.

//REQUIRE NPM PACKAGES
//-------------------------------------------------

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//EXPRESS CONFIGURATION
//-----------------------------------------------------

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//ROUTES
//----------------------------------------------------------

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// LISTENER
//-------------------------------------------------------------
// effectively "starts" our server


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
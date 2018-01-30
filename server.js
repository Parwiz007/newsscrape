

// Require our dependencies
var express = require("express");
var mongoose = require("mongoose");
var expressHandlebars = require("express-handlebars");
var bodyParser = require("body-parser");

//setting up the Port
var PORT = process.env.PORT || 3000;


var app = express();

//  Express Router
var router = express.Router();


require("./config/routes")(router);

//  public folder 
app.use(express.static(__dirname + "/public"));

// Connecting Handlebars to Express app
app.engine("handlebars", expressHandlebars({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// Using bodyParser 
app.use(bodyParser.urlencoded({
  extended: false
}));


app.use(router);



var db = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// Connecting mongoose to database
mongoose.connect(db, function(error) {
  
  if (error) {
    console.log(error);
  }
  
  else {
    console.log("mongoose connection is successful");
  }
});

// listening to the Port
app.listen(PORT, function() {
  console.log("Listening on port:" + PORT);
});

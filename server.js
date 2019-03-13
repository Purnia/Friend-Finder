//using an npm express package to allow us to use express functionality

var express = require("express");

//=============== configuring express server in the following lines =====================


// Tells node that we are creating an "express" server and saving it in variable called app
var app = express();

// setting a localport that we'll use in our listener later on. This servers as a portal to send and recieve data and communication 
var PORT = process.env.PORT || 8080;

// setting up the express app so it parses data.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ================================================================================


// =============================ROUTER==========================================
// code below points to route files that give our server a map of how to respond when requests are made from
// respective urls. its also passed thrugh app to allow us to use its fucntionality later on 


require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


// ===============================================================================



// ================================listener=============================================
//port is started

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });



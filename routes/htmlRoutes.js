// using node to initiate a path package that allows us to path functionality in routing to different file templates
var path = require("path");



// ==================================Routing=============================================

module.exports = function(app) {
  // HTML GET Requests
  //sending actual html files under some conditions
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"))
});

app.get("/survey", function(res, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"))
});

};
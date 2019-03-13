
// we want to link our routes to data sources. In this case, surveyData holds an array of information its getting from the survey array in freidns.js

var surveyData = require("../data/friends");




// =================================routing==============================================

module.exports = function(app) {
    // API GET Requests
    //when client visits api/survey it can see all the data within surveyData (in a json object)
  
    app.get("/api/survey", function(req, res) {
      res.json(surveyData);
      console.log(surveyData);
    });


// API POST Requests
//when a client submits the survey form and clicks submit, the data is sent to the server (a json object).
//the server then sends it to a js array in this case surveyArray which is saved inside surveyData


  app.post("/api/survey", function(req, res) {
    surveyData.push(req.body);
    console.log('here is the api/survey route res: ', res)
    res.json(res.body)
  });

};


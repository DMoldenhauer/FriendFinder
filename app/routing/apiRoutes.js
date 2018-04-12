//PSUEDO CODE 
//---------------------------------------------------------------
//To Find a match for the friend array submitted:
//  import submitted array of form inputs
//  compare form input array to all the friend arrays in friends.js
//    do a difference on each score entered
//    total up differences - smallest total difference is the match
//  export match name and picture to html modal 

// //links routes to data

var friendsData = require("../data/friends");
// var path = require("path");
// var bodyParser = require("body-parser");
// // Your apiRoutes.js file should contain two routes:


// //Routing
// //---------------------------------------------------

module.exports = function (app) 
{
  //   // A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.

  app.get("/api/friends", function (req, res) {
    res.json(friendsData);

  });


  var bestMatch = { name: "", photo: "", total: 100 };
  var difference = 0;
  //   // A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

  //   // Create New friends - takes in JSON input
  app.post("/api/friends", function (req, res) 
  {
    // friendsData.push(req.body);

    //   //  import submitted array of form inputs
    var friendInput = req.body;
    //   //  compare form input array to all the friend arrays in friends.js
    for (i = 0; i < friendsData.length; i++) {
      //    do a difference on each score entered
      difference = 0;

      for (x = 0; x < 9; x++); {
        difference = difference + Math.abs(friendsData[i].scores[x] - friendInput.scores[x]);

      }
          //   //    total up differences - smallest total difference is the match
    //   //  export match name and picture to html modal 
      if (difference < bestMatch.total) {
        bestMatch.total = difference;
        bestMatch.name = friendsData[i].name;
        bestMatch.photo = friendsData[i].photo;
      }

    }
    res.json(bestMatch);
    console.log("bestMatch from apiRoutes.js is:  "  + bestMatch);
  

    // res.redirect("/");


  });


};






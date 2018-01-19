var scoresArray = require("../data/friends.js");

module.exports = function(app){
    app.get("/api/friends", function (req, res){
        res.json(scoresArray);
    })


    app.post("/api/friends", function(req, res){
        // logic that pushes the score goes here, jQuery and all that stuff
        // push survey scores to the scoresArray
        // compare scores
        // push back the best-match
    })
}
var scoresArray = require("/Users/GFigarella/Documents/Programacion/Bootcamp/WorkingDirectory/Homework/Friend-finder/app/data/friends.js");

module.exports = function(app){
    app.get("/api/friends", function (req, res){
        res.json(scoresArray);
    })
}
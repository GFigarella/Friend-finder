//Dependencies
var path = require("path");

module.exports = function(app){
    //GET request that takes the user to the homepage
    app.get("/survey", function (req, res){
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    })

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });
}

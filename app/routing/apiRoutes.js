//link to data
var friendData = require("../data/friends");

//export to our app
module.exports = function(app) {

//get route to /api/friends where all possible friends are displayed
app.get("/api/friends", function(req, res) {
	for(var i=0; i<friendData.length; i++) {
	res.json(friendData[i]);
}

});

//post routes to handle incoming survey results and compatability logic
app.post("/api/friends", function(req, res) {
	friendData.push(req.body);
	console.log(req.body);

	console.log(friendData.length);
	console.log(friendData[0].name);

	res.json(friendData[0].name);


});

};

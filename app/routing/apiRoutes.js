//link to data
var friendData = require("../data/friends");

//export to our app
module.exports = function(app) {

//get route to /api/friends where all possible friends are displayed
app.get("/api/friends", function(req, res) {
		res.json(friendData);

});

//post routes to handle incoming survey results and compatability logic
app.post("/api/friends", function(req, res) {
	//friendData.push(req.body);
	// console.log(req.body);

	// console.log(friendData.length);
	// console.log(friendData[0].name);

	res.json(friendData[0].name);

	//loop through friends.js friendData array
	//get score[i] - friendData[i]score[j]

	var bestMatch = {
		name:"",
		photo:"",
		friendDiff: 1000
	};
	//set the user data entered in survey to variables to make it easier
	var userInput = req.body;
	var userScores = userInput.scores;

	//variable to hold the difference in the user and existing friends scores
	var totalDiff = 0; 

	//time to loop through the friendArray and compare scores
	for(var i=0; i<friendData.length; i++) { //get friend in existing friendData
		console.log(friendData[i]);

		for(var j=0; j<friendData[i].scores[j]; j++){
			totalDiff += Math.abs(parseInt(userScores[j])-parseInt(friendData[i].scores[j]));

			if (totalDiff <= bestMatch.friendDiff) {

				bestMatch.name = friendData[i].name;
				bestMatch.photo = friendData[i].photo;
				bestMatch.friendDiff = totalDiff;

			}
		}

	}
	friendData.push(userInput);
	res.json(bestMatch);

});

};

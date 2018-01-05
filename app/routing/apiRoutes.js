// LOAD DATA
// Linking routes to a series of "data" sources
// These data sources hold arrays of information on friendsData

var friends = require("../data/friends");

// ROUTING
module.exports = function(app) {
	// API GET requests 
		// Displays a JSON of all possible friends.
	app.get("/api/friends", function(req, res) {
		res.json(friends);
	});

	// API POST requests
		// Handles incoming survey results
		// Also be used to handle the compatibility logic

		// Handles when a user submits a form and thus submits data to the server.
		// In each of the below cases, when a user submits form data (a JSON object)
		// ...the JSON is pushed to the appropriate JavaScript array
	app.post("/api/friends", function(req, res) {
		// The "server" will respond to a user"s survey result
		// Then compare those results against every user in the database
		// It will then calculate the difference between each of the numbers and the user"s numbers.
		// It will then choose the user with the least differences as the "best friend match."
		// In the case of multiple users with the same result it will choose the first match.
		// After the test, it will push the user to the database.


		// This object will hold the "best match". 
		// It will constantly update it as it loops through all of the options
		var bestMatch = {
			name: "",
			photo: "",
			friendDifference: Infinity
		};

		// Take the result of the user's survey POST and parse it
		var userData = req.body;
		var userScores = userData.scores;

		// This variable will calculate the difference between the user"s scores and the scores of
		// each user in the database
		var totalDifference;

		// Loop through all the friend possibilities in the database
		for (var i = 0; i < friends.length; i++) {
			var currentFriend = friends[i];
			totalDifference = 0;

			console.log(currentFriend.name);

			// Then loop through all the scores of each friend
			for (var j = 0; j < currentFriend.scores.length; j++) {
				var currentFriendScore = currentFriend.scores[j];
				var currentUserScore = userScores[j];

				// Calculate the difference between the scores and sum them into totalDifference
				totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
			}

			// If the sum of differences is less than the differences of the current "best match"
			if (totalDifference <= bestMatch.friendDifference) {
				// Reset the bestMatch to be the new friend.
				bestMatch.name = currentFriend.name;
				bestMatch.photo = currentFriend.photo;
				bestMatch.friendDifference = totalDifference;
			}
		} 

		// Save the user's data to database (Must happen after the check otherwise, 
		// the database will always return that the user is the user's best friend)
		friends.push(userData);

		// Return a JSON with the user's bestMatch. This will be used by the HTML in the next page
		res.json(bestMatch);

	});
};
# FriendFinder — Node and Express Servers 

#### HW #11 for The Coding Bootcamp at UT Austin

For this assignment, I built a compatibility-based ‘FriendFinder’ application. 
This full-stack site takes in results from users’ surveys, then compares their answers with those from other users.
The app will then display the name and picture of the user with the best overall match.


I used Express to handle routing, and deployed my app to Heroku so other users can fill it out. 


The survey has 10 questions, each answer is on a scale of 1 to 5 based on how much the user agrees or disagrees with a question. 


My ‘server.js’ file requires the npm packages: ‘express’, ‘body-parser’, and ‘path’. 


My ‘htmlRoutes.js’ file contains two routes:

	* A GET route to ‘/survey’ which displays the survey page.
	* A default, catch-all route that leads to ‘home.html’ which displays the home page.


My ‘apiRoutes.js’ file contains two routes: 

	* A GET route with the url ‘/api/friends’ which displays a JSON of all possible friends.
	* A POST routes to ‘/api/friends’ which is used to handle incoming survey results and the compatibility logic. 


My application’s data is saved inside of ‘/app/data/friends.js’ as an array of objects.


Once my app finds the current user’s most compatible friend, the result is displayed as a modal pop-up with both he name and picture of the closest match.



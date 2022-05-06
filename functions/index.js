const functions = require("firebase-functions"); //es5
const express = require('express');

const app = express();

//route
app.get('/test', (req, res) => {
    res.send('This is actually working 🔥');
});

//instead of using a port we are going to use a cloud function
exports.app = functions.https.onRequest(app); //replaces our app.listen port
//whatever we name this function should be the same as the name for the function 
//name in the .json file


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


var functions = require('firebase-functions');
var admin = require('firebase-admin');
// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

// Tell it to use our current App
admin.initializeApp(functions.config().firebase);

// Nodeland :(
/** 1- request permission from the user to receive push notifications
 * ./RequestMessagingPermissions
 * **/

/** 2- write function to send data to the user who allowed permission **/
exports.NewMessageAlert = functions.database.ref('/users') //TODO must me /users node to get the uid
    .onWrite(function(event) {
        console.log('event', event);
        var message = event.data.val();
        console.log('NewMessageAlert - message', message);

        var usersHaveTokens = admin.database().ref('/users')
            .once('value').then((snap) => {
                console.log('usersHaveTokens - SNAP:', snap);

                const tokens = [];

                snap.forEach((user) => {
                    const token = user.child('token').val();
                    if (token) tokens.push(token)
            });
            return tokens;
            console.log('TOKENS', tokens)
        });

        // get user info

        //TODO it doesnt get a uid passed in here
        const getAuthor = admin.auth().getUser(message.uid);
        // const getAuthor = admin.auth().getUser('EWwd3z7sU9eK2QvsO1vlXxlsHno1');


        // wait for all promises to resolve in parallel to proceed
        Promise.all([usersHaveTokens, getAuthor])
            // .then((results) => {
            .then(([tokens, author]) => {
                // destructuring
                console.log('PROMISES - [tokens, author]', tokens, author);
                // const tokens1 = results[0];
                // const author1 = results[1];
                // console.log('tokens1, author1', tokens1, author1);

                // puts a payload notification we want to send to the user(s)
                const blob = {
                    notification: `This is the notification message: ${author.displayName}`,
                    body: message.content,
                    icon: author.photoURL
                };

                // sends the payload to the user
                admin.messaging().sendToDevice(tokens, blob)
                    .catch(console.error);
            });

    });

/** 3- install service workers on client browser to receive data
 * ./firebase-messaging-sw.js
 * **/

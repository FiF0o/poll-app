var functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

exports.newPollAlert = functions.database.ref('/polls/{poll}').onWrite((event) => {
    const poll = event.data.val();

    const getTokens = admin.database().ref('users').once('value').then((snapshot) => {
        const tokens = [];
        snapshot.forEach((user) => {
            const token = user.child('fcm-token').val();
            if (token) tokens.push(token);
        });
        return tokens;
    });

    const getAuthor = admin.auth().getUser(poll.uid);

    Promise.all([getTokens, getAuthor]).then(([tokens, author]) => {
        const payload = {
            notification: {
                title: `New Poll from ${author.displayName}`,
                body: poll.description,
                icon: author.photoURL
            }
        };

        // broadcast messages to all the users here with FCM
        admin.messaging().sendToDevice(tokens, payload)
            .catch(console.error);
    });
});
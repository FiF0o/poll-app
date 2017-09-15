/**
 * Created by jonlazarini on 03/05/17.
 */
var database = require('../database/firebase').database;
var messaging = require('../database/firebase').messaging;


function sendTokenToServer(user, token) {
    return database.ref('users')
        .child(user.uid)
        .child('fcm-token')
        .set(token)
}

function showToken(token) {
    return console.log('Show token:', token)
}


export const RequestMessagingPermissions = (loggedUser) => {
     messaging.requestPermission() // show notification window to grant permission
        .then(() => messaging.getToken())
        .then((currentToken) => {
            if(currentToken) sendTokenToServer(loggedUser, currentToken);
            else {
                // Show permission request.
                console.log('No Instance ID token available. Request permission to generate one.');
                // Show permission UI.
                // setTokenSentToServer(false);
            }
            messaging.onMessage('onMessage does it work?')
        })
        .catch(function(err) {
            // user denied the permission
            console.log('An error occurred while retrieving token. ', err);
            showToken('Error retrieving Instance ID token. ', err);
            // setTokenSentToServer(false);
        });
};

/* eslint-disable */
const MonitorTokens = () => {
    // Callback fired if Instance ID token is updated.
    messaging.onTokenRefresh(function() {
        messaging.getToken()
            .then(function(refreshedToken) {
                console.log('Token refreshed.');
                // Indicate that the new Instance ID token has not yet been sent to the
                // app server.
                // setTokenSentToServer(false);
                // Send Instance ID token to app server.
                sendTokenToServer(refreshedToken);
            })
            .catch(function(err) {
                console.log('Unable to retrieve refreshed token ', err);
                showToken('Unable to retrieve refreshed token ', err);
            });
    });
};

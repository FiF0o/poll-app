/**
 * Created by jonlazarini on 03/05/17.
 */
var database = require('../src/database/firebase').database;
var messaging = require('../src/database/firebase').messaging;


function sendTokenToServer(token) {
    // firebase stuff to come
    return console.log('sendToken:', token)
}

function showToken(token) {
    return console.log('Show token:', token)
}


exports.RequestMessagingPermissions = function(user) {
    messaging.requestPermission() // show notification window to grant permission
        .then(function(){
            console.log('Permission granted!');
            messaging.getToken();
            console.log('getting token...');
        })
        .then(function(currentToken) {
            console.log('[RequestMessagingPermissions] - TOKEN', currentToken);
            if(currentToken) {
                sendTokenToServer(currentToken);
            }
            else {
                // Show permission request.
                console.log('No Instance ID token available. Request permission to generate one.');
                // Show permission UI.
                // setTokenSentToServer(false);
            }
        })
        .catch(function(err) {
            // user denied the permission
            console.log('An error occurred while retrieving token. ', err);
            showToken('Error retrieving Instance ID token. ', err);
            // setTokenSentToServer(false);
        });
};

exports.MonitorTokens = function() {
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

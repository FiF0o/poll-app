/**
 * Created by jonlazarini on 14/07/17.
 */
//TODO TO Move SW File to ./build/ dir once ready to be deployed
// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js');
// If you do not serve/host your project using Firebase Hosting see https://firebase.google.com/docs/web/setup

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.

// var tokens = require('../src/config/tokens');
/*apiKey: 'AIzaSyD7cuPVp63lxC00Q8iGilrfIUMI3GJgKnc',
authDomain: 'poll-app-67a23.firebaseapp.com',
databaseURL: 'https://poll-app-67a23.firebaseio.com',
projectId: 'poll-app-67a23',
storageBucket: 'poll-app-67a23.appspot.com',*/

const config = {
    messagingSenderId: '471457051155'
};
/*const config = {
    apiKey: tokens.apiKey,
    authDomain: tokens.authDomain,
    databaseURL: tokens.databaseURL,
    projectId: tokens.projectId,
    storageBucket: tokens.storageBucket,
    messagingSenderId: tokens.messagingSenderId
};*/

firebase.initializeApp(config);


// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

// gets the payload from FCM - admin.messaging().sendToDevice()
/*messaging.onMessage(function(payload) {
    console.log('[firebase-messaging-sw.js] - onMessage :', payload);
    // Do something something with the payload
    // Append message for example or do any other thing with the message
});*/

// If you would like to customize notifications that are received in the
// background (Web app is closed or not in browser focus) then you should
// implement this optional method.
// [START background_handler]
messaging.setBackgroundMessageHandler(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message from FCM:', payload);
    // Customize notification here
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
        body: 'Background Message body.',
        icon: '/firebase-logo.png'
    };

    // normal web browser API
    return self.registration.showNotification(notificationTitle,
        notificationOptions);
});
// [END background_handler]

/**
 *
 https://firebase.google.com/docs/cloud-messaging/http-server-ref#send-downstream
 https://firebase.google.com/docs/cloud-messaging/server#auth

 token from FCM: emQGZ7Gf6no:APA91bELc0D1Q7GLts66kIROfPXO-qAJY0FcLhRHrK2iwHV1aV_O6x_sVeHl5pL2a7y3AewUCzO2yZyWEgBAUnkNFgPJgnHPU72K7tI9jw-RLzvSIJfrd7kR8mqxwHbJ9dvO7GSz1rFH
 *
 curl -X POST --header "Authorization: key=AIzaSyD7cuPVp63lxC00Q8iGilrfIUMI3GJgKnc" --header "Content-Type: application/json" https://fcm.googleapis.com/fcm/send -d "{"to":"AAAAbcUHshM:APA91bFlJOH_C5md_ynLdQuNkBpgeMaKfvBPXSGpMaBEIgs1HqC4yuIbasCtHs0KOkcdjlCzJMrbwI9tjKRrvPYcFbM_pbGS4GCp0V8loAz6xDkvEqOit9DAN-xm7kGqjm6GEtFwt4Vg","priority":"high","notification":{"body": "blabla"}}"﻿
 curl -X POST --header "Authorization: key='AAAAbcUHshM:APA91bFlJOH_C5md_ynLdQuNkBpgeMaKfvBPXSGpMaBEIgs1HqC4yuIbasCtHs0KOkcdjlCzJMrbwI9tjKRrvPYcFbM_pbGS4GCp0V8loAz6xDkvEqOit9DAN-xm7kGqjm6GEtFwt4Vg'" --header "Content-Type: application/json" https://fcm.googleapis.com/fcm/send -d "{"to":"AAAAbcUHshM:APA91bFlJOH_C5md_ynLdQuNkBpgeMaKfvBPXSGpMaBEIgs1HqC4yuIbasCtHs0KOkcdjlCzJMrbwI9tjKRrvPYcFbM_pbGS4GCp0V8loAz6xDkvEqOit9DAN-xm7kGqjm6GEtFwt4Vg","priority":"high","notification":{"body": "blabla"}}"﻿
 *
 */

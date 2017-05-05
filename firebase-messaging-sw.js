/**
 * Created by jonlazarini on 03/05/17.
 */
/** FCM is looking for this service worker file to allow it to work -
 * installed in web browser
 *
 * Devtools > Application > Service workers
 * **/

// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/3.5.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.5.2/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
    'messagingSenderId': '471457051155'
});

// Retrieve an instance of Firebase Messaging so that it can handle background messages.
const messaging = firebase.messaging();

// runs in the background and listen for messages
// users will receive a notification/payload if the app is closed/other tab/offline, etc...
messaging.setBackgroundMessageHandler((payload) => {
    console.log('SW payload sent to client', payload);
    const title = payload.title;
    const opts = {
        body: payload.body,
        icon: payload.icon
    };

    // window/tab will send the notification - browser API
    self.registration.showNotification(title, opts)
});

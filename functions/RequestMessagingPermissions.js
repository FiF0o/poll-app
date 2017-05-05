/**
 * Created by jonlazarini on 03/05/17.
 */
var database = require('../src/database/firebase').database;
var messaging = require('../src/database/firebase').messaging;

exports.RequestMessagingPermissions = function(user) {
    console.log('RequestMessagingPermissions - USER:', user);
  messaging.requestPermission() // show notification window to grant permission
      .then(function(){
          console.log('Permission granted!');
         return messaging.getToken();
      })
      .then(function(token) {
          console.log('RequestMessagingPermissions - TOKEN', token);
          //sends to the server
          database.ref('/users')
              // .child('EWwd3z7sU9eK2QvsO1vlXxlsHno1')
              .child(user.uid)
              .child('/token')
              .set(token);
          console.log('RequestMessagingPermissions - is token set?', token)
      })
      .catch(function(err) {
          // user denied the permission
          console.error(err);
      });
};
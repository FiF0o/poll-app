export const writeUser = ({email, displayName, photoURL, uid}, firebaseNode) =>
  firebaseNode.child(uid).set({
    email,
    displayName,
    photoURL,
    uid,
    timeStamp: Date.now()
  });

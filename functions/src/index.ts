const functions = require('firebase-functions');
const bcrypt = require('bcryptjs');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();

// exports.storePass = functions.https.onRequest((req: any, res: any) => {
//   // Grab the text parameter.
//   const pass = req.query.text;
//   bcrypt.genSalt(3,function(err: any, salt: any) {
//     bcrypt.hash(pass, "$2a$10$gc3jXAgMmqfrHD/A79GfIO", function(error: any, hash: any) {
//       // Push the new message into the Realtime Database using the Firebase Admin SDK.
//       return admin.database().ref('/Data/uInfo').push({hash: hash, salt: salt}).then((snapshot: any) => {
//         // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
//         return res.redirect(303, snapshot.ref.toString());
//       });
//     });
//   });
// });

exports.storePass = functions.https.onCall((req: any, res: any) => {
  // Grab the text parameter.
  const pass = req.query.text;
  bcrypt.genSalt(3,function(err: any, salt: any) {
    bcrypt.hash(pass, "$2a$10$gc3jXAgMmqfrHD/A79GfIO", function(error: any, hash: any) {
      // Push the new message into the Realtime Database using the Firebase Admin SDK.
      return admin.database().ref('/Data/uInfo').push({hash: hash, salt: salt}).then((snapshot: any) => {
        // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
        return res.redirect(303, snapshot.ref.toString());
      });
    });
  });
});


// https://us-central1-dino-trax.cloudfunctions.net/storePass
// https://dino-trax.firebaseapp.com <-- deployed http

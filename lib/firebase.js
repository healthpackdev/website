import admin from 'firebase-admin';

if (!admin.apps.length) {
  console.log(process.env.FIREBASE_PRIVATE_KEY);
  admin.initializeApp({
    credential: admin.credential.cert({
      project_id: 'healthpackdev-cf',
      private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      client_email: process.env.FIREBASE_CLIENT_EMAIL,
    }),
    databaseURL: 'https://healthpackdev-cf-default-rtdb.firebaseio.com', // Your firebase db url.
  });
}

export default admin.database();

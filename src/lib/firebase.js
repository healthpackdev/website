import admin from 'firebase-admin';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      project_id: 'yasin-kadir-website',
      private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      client_email: process.env.FIREBASE_CLIENT_EMAIL,
    }),
    databaseURL: 'https://yasin-kadir-website-default-rtdb.firebaseio.com',
  });
}

export default admin.database();
import firebase from 'firebase/app';
import 'firebase/auth';

export const app =
  firebase.apps[0] ||
  firebase.initializeApp({
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: 'yasin-kadir-website.firebaseapp.com',
    databaseURL: 'https://yasin-kadir-website-default-rtdb.firebaseio.com',
    projectId: 'yasin-kadir-website',
    appId: '1:710921044065:web:1eca26e50fb206f8cb6a20',
  });
export const auth = app.auth();

export const githubAuth = new firebase.auth.GithubAuthProvider();
githubAuth.setCustomParameters({
  allow_signup: false,
});

import * as firebase from 'firebase';
import * as c from "./constants"

// Initialize Firebase
const config = {
    apiKey: c.FIREBASE_API_KEY,
    authDomain: c.FIREBASE_AUTH_DOMAIN,
    databaseURL: c.FIREBASE_DATABASE_URL,
    storageBucket: c.FIREBASE_STORAGE_BUCKET,
};

firebase.initializeApp(config);

export const database = firebase.database();
export const auth = firebase.auth();
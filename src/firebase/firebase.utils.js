import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDxqbTPevuJ0oayE16l9O-uCZKWsAZFCo4",
  authDomain: "crwn-db-249e7.firebaseapp.com",
  databaseURL: "https://crwn-db-249e7.firebaseio.com",
  projectId: "crwn-db-249e7",
  storageBucket: "crwn-db-249e7.appspot.com",
  messagingSenderId: "196257146047",
  appId: "1:196257146047:web:e532fd958f7bb77c1c920a",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

import firebase from "firebase";
// Initialize Firebase
var config = {
  apiKey: "AIzaSyA9rCHbIQR6-TVOmvUvqheGgQdNucJ_IO0",
  authDomain: "shopping-cart-37b5c.firebaseapp.com",
  databaseURL: "https://shopping-cart-37b5c.firebaseio.com",
  projectId: "shopping-cart-37b5c",
  storageBucket: "shopping-cart-37b5c.appspot.com",
  messagingSenderId: "610086647121"
};
firebase.initializeApp(config);
var firestore = firebase.firestore();

const databaseRef = firebase.database().ref();
export const goodsRef = databaseRef.child("shopping");
// const settings = { timestampsInSnapshots: true };
// firestore.settings(settings);

// export default firestore;

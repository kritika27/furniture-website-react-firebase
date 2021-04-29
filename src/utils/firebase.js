import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBzog1TiGTcZtrOyDj9mMvcn8priE1gexQ",
  authDomain: "furniture-f9809.firebaseapp.com",
  projectId: "furniture-f9809",
  storageBucket: "furniture-f9809.appspot.com",
  messagingSenderId: "1011447319576",
  appId: "1:1011447319576:web:0e587a0201d2ab4d46076d",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth;

export default firebase;

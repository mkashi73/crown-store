import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBcg8uKy1Wi3kQ6FFPIwXkNNXFvcnwxG9Q",
  authDomain: "crwn-clothing-db-544.firebaseapp.com",
  projectId: "crwn-clothing-db-544",
  storageBucket: "crwn-clothing-db-544.appspot.com",
  messagingSenderId: "224656176963",
  appId: "1:224656176963:web:1345f578ba64c9a628e1f6",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const SignInWithGooglePopup = () => auth.signInWithPopup(provider);

export default firebase;

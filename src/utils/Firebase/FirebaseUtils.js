import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcg8uKy1Wi3kQ6FFPIwXkNNXFvcnwxG9Q",
  authDomain: "crwn-clothing-db-544.firebaseapp.com",
  projectId: "crwn-clothing-db-544",
  storageBucket: "crwn-clothing-db-544.appspot.com",
  messagingSenderId: "224656176963",
  appId: "1:224656176963:web:1345f578ba64c9a628e1f6",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

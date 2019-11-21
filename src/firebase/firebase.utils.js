import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAgAJRlAza7EWcK3bENKQ35XISMIrRQFJs",
  authDomain: "pupper-store.firebaseapp.com",
  databaseURL: "https://pupper-store.firebaseio.com",
  projectId: "pupper-store",
  storageBucket: "pupper-store.appspot.com",
  messagingSenderId: "1096158562281",
  appId: "1:1096158562281:web:807cf53cac31e5891bed78"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

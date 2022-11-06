import firebase from "firebase/compat/app";

// Add the Firebase products that you want to use
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "***",
	authDomain: "***",
	projectId: "***",
	storageBucket: "***",
	messagingSenderId: "***",
	appId: "***",
	measurementId: "***",
  
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
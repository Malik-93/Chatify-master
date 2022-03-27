import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const provider = new firebase.auth.GoogleAuthProvider();

const firebaseConfig = {
  apiKey: "AIzaSyAeAACw2pEcYrm3cYfR3gHrBOhc8oCAlDc",
  authDomain: "chitchat-3734f.firebaseapp.com",
  projectId: "chitchat-3734f",
  storageBucket: "chitchat-3734f.appspot.com",
  messagingSenderId: "260888625202",
  appId: "1:260888625202:web:395fea786ce329ffed7c2b",
  measurementId: "G-RXCSGK3K5F"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, provider, storage };

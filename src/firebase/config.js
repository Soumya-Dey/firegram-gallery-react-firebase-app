import firebase from "firebase";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAgDXriV27tHO6t4tMI8HMi7zjJLrSy0IQ",
    authDomain: "firegram-gallery-app.firebaseapp.com",
    databaseURL: "https://firegram-gallery-app.firebaseio.com",
    projectId: "firegram-gallery-app",
    storageBucket: "firegram-gallery-app.appspot.com",
    messagingSenderId: "723784615268",
    appId: "1:723784615268:web:686979a1828bc98ed06671",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };

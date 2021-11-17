// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBBJMwDABffq6bCg_P-6-UVFR9k1fnc4Cs",
    authDomain: "receipt-coll.firebaseapp.com",
    projectId: "receipt-coll",
    storageBucket: "receipt-coll.appspot.com",
    messagingSenderId: "39473648142",
    appId: "1:39473648142:web:266f7f3695734d23e4625f"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export { auth };
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcB1OO1mmziZ0EHnoyNfLWQpAhiiqyMSU",
  authDomain: "miniblog-3d50c.firebaseapp.com",
  projectId: "miniblog-3d50c",
  storageBucket: "miniblog-3d50c.appspot.com",
  messagingSenderId: "321449792335",
  appId: "1:321449792335:web:c7362d329c8aa283f16b3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
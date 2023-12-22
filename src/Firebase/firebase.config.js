import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCP_6ARPLmpAGgjJzN1aE_OGuH8Q2uAbOk",
  authDomain: "task-management-7904c.firebaseapp.com",
  projectId: "task-management-7904c",
  storageBucket: "task-management-7904c.appspot.com",
  messagingSenderId: "647530102740",
  appId: "1:647530102740:web:6e4b1912009e69aa9c6041"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth
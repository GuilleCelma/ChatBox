

import 'firebase/auth';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkc7CIHg5vqE2p00xJh6H4WAQ26KQoB4A",
  authDomain: "chatbox-229c9.firebaseapp.com",
  projectId: "chatbox-229c9",
  storageBucket: "chatbox-229c9.appspot.com",
  messagingSenderId: "1060493431250",
  appId: "1:1060493431250:web:6f438ecd5187ddb041b80b"
};

// Initialize Firebase
 const Auth = initializeApp(firebaseConfig).auth();

export default Auth

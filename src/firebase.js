// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAI986lHzCejQYgE-KDrp2gL9-BQRzZMOk",
  authDomain: "react-disney-project.firebaseapp.com",
  projectId: "react-disney-project",
  storageBucket: "react-disney-project.appspot.com",
  messagingSenderId: "20176359627",
  appId: "1:20176359627:web:904377ff20850c8c9fcb4e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
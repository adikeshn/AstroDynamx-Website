// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgzJP6t1y8n7P6Bc98jHRz-i1iHqchh2k",
  authDomain: "astrodynamx-b1287.firebaseapp.com",
  projectId: "astrodynamx-b1287",
  storageBucket: "astrodynamx-b1287.appspot.com",
  messagingSenderId: "825102991270",
  appId: "1:825102991270:web:627dcb50fe1ad6b7461967",
  measurementId: "G-5DJ75DQSYR"
};

const app = initializeApp(firebaseConfig);



const db = getFirestore(app)

export const auth = getAuth();

const FirebaseInfo = { firebaseConfig: firebaseConfig, app: app, auth: auth, db: db };
export default FirebaseInfo;
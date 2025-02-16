// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import {getFirebase} from "firebase/fires"
import { getFirestore } from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVsp_GSNSb6DrPneyIHY-m5JGqFcpC32w",
  authDomain: "sample-firetestbase-ai-a-a158e.firebaseapp.com",
  projectId: "sample-firetestbase-ai-a-a158e",
  storageBucket: "sample-firetestbase-ai-a-a158e.firebasestorage.app",
  messagingSenderId: "761756890115",
  appId: "1:761756890115:web:2b09d4b6f3bb211fdd4a36"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA1YiX208Ns3soeFXs-rGF1TahkwcvijKM",
    authDomain: "home-ph-d3ff3.firebaseapp.com",
    projectId: "home-ph-d3ff3",
    storageBucket: "home-ph-d3ff3.appspot.com",
    messagingSenderId: "684412458962",
    appId: "1:684412458962:web:822a887acd98f485c19a0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export default app
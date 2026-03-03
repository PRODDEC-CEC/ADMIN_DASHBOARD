// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// Replace with your actual Firebase config


function test() {
    if (!import.meta.env.VITE_FIREBASE_API_KEY || !import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || !import.meta.env.VITE_FIREBASE_PROJECT_ID || !import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || !import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || !import.meta.env.VITE_FIREBASE_APP_ID || !import.meta.env.VITE_FIREBASE_MEASUREMENT_ID) {
        throw new Error("VITE_FIREBASE_API_KEY is not defined");
    } else {
        console.log("Successfully imported Firebase config");
        console.log(import.meta.env.VITE_FIREBASE_API_KEY);
        console.log(import.meta.env.VITE_FIREBASE_AUTH_DOMAIN);
        console.log(import.meta.env.VITE_FIREBASE_PROJECT_ID);
        console.log(import.meta.env.VITE_FIREBASE_STORAGE_BUCKET);
        console.log(import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID);
        console.log(import.meta.env.VITE_FIREBASE_APP_ID);
        console.log(import.meta.env.VITE_FIREBASE_MEASUREMENT_ID);
    }
}
test();
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app);
export const db = getFirestore(app);

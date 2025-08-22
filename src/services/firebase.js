// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDOe1gPO-vRzGldW67uW2BurqwQbkJxe9w",
  authDomain: "practice-auth-app-6a9e8.firebaseapp.com",
  projectId: "practice-auth-app-6a9e8",
  storageBucket: "practice-auth-app-6a9e8.firebasestorage.app",
  messagingSenderId: "488788681646",
  appId: "1:488788681646:web:468d52d53a42a4df3d5e3f",
  measurementId: "G-W2HMSXGC22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
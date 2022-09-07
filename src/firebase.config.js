
import {getFirestore} from "firebase/firestore";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBvb6vj2h3sAokODfZ87s_ndW1jhKWmE3o",
  authDomain: "house-marketplace-app-7bff1.firebaseapp.com",
  projectId: "house-marketplace-app-7bff1",
  storageBucket: "house-marketplace-app-7bff1.appspot.com",
  messagingSenderId: "106190550340",
  appId: "1:106190550340:web:58419ebdd5f319daf95311"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/fireStore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "feedback-project-cf32a.firebaseapp.com",
  projectId: "feedback-project-cf32a",
  storageBucket: "feedback-project-cf32a.appspot.com",
  messagingSenderId: "285945935306",
  appId: "1:285945935306:web:425d7852ec2d617a614b33",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();

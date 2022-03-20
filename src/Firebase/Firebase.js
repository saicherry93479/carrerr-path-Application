import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBBqSOn5CcS7wBBkLyGIQg-iCfBJ5mVXec",
  authDomain: "hackathon-96a56.firebaseapp.com",
  projectId: "hackathon-96a56",
  storageBucket: "hackathon-96a56.appspot.com",
  messagingSenderId: "837246194856",
  appId: "1:837246194856:web:b85bbeb84b9886c7901e9d",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const auth = getAuth(app);

import { async } from "@firebase/util";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import {
  addDoc,
  collection,
  doc,
  setDoc,
  Timestamp,
  updateDoc,
} from "firebase/firestore/lite";
import { useContext } from "react";
import { scrollContext } from "../App";
import { auth, db } from "./Firebase";

export const SignUp = async (email, password) => {
  console.log("email ", email, "password ", password);
  try {
    const userCred = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCred.user);
    return "sucess";
  } catch (error) {
    console.log("err ", error);
    switch (error.code) {
      case "auth/email-already-in-use":
        return "email already in use";
      case "auth/invalid-email":
        return "email is not valid";
      case "auth/user-not-found":
        return "Invalid user";
    }
  }
};

export const SignIn = async (email, password) => {
  console.log("email and password ", email, "  ", password);
  try {
    const userCred = await signInWithEmailAndPassword(auth, email, password);
    return "sucess";
  } catch (err) {
    console.log(err);
    switch (err.code) {
      case "auth/wrong-password":
        return "password is not valid";
      case "auth/invalid-email":
        return "email is not valid";
    }
  }
};
export const LogOut = async () => {
  await signOut(auth);
};

export const addQuestion = async (title, body) => {
  const data = {
    title: title,
    body: body,
    uid: auth.currentUser.uid,
    email: auth.currentUser.email,
    timestamp: Date(),
  };
  try {
    const docRef = await addDoc(collection(db, "questions"), data);
    console.log(docRef.id);
    return "sucess";
  } catch (e) {
    console.log("error in addquestion is ", e);
    return "fail";
  }
};

export const addComment = async (id, comment) => {
  console.log("id is ", id, " comments ", comment);
  const collectionData = "questions/" + id + "/comments";
  try {
    const docRef = await addDoc(collection(db, collectionData), {
      commentBy: auth.currentUser.id,
      comment: comment,
    });
    console.log("docref id is ", docRef.id);
    return "sucess";
  } catch (e) {
    console.log("error in update doc is ", e);
    return "fail";
  }
};

import { initializeApp } from "@firebase/app"
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "@firebase/auth"
import {getFirestore} from '@firebase/firestore'

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
}

// Initialize Firebase
const app = initializeApp(config)
const auth = getAuth(app)
const firestore = getFirestore(app)
const signIn = function (form) {
  if (form.email && form.password) {
    return signInWithEmailAndPassword(auth, form.email, form.password)
  }

  return new Promise.reject({
    code: 400,
    message: 'email and password invalid!'
  })
 
}

const signUp = function (form) {
  if (form.email && form.password) {
    return createUserWithEmailAndPassword(auth,form.email,form.password)
  }

  return new Promise.reject({
    code: 500,
    message: 'you must enter valid email and password!'
  })
}

const logOut = function () {
  signOut(auth)
}

export default {
  app,
  auth,
  firestore,
  signIn,
  signUp,
  signOut: logOut
}
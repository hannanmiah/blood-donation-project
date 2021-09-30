import { initializeApp } from "@firebase/app"
import { getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword,signOut } from "@firebase/auth"

const config = {
  apiKey: 'AIzaSyB9G-xo_ErbV_iasAuXo-Xh6ncn4BVHeok',
  authDomain: 'blood-donation-project-124a6.firebaseapp.com',
  projectId: 'blood-donation-project-124a6',
  storageBucket: 'blood-donation-project-124a6.appspot.com',
  messagingSenderId: '330045086063',
  appId: '1:330045086063:web:9b828d4c0da9912dd0309a',
  measurementId: 'G-YCWNLRPJC0',
}

// Initialize Firebase
const app = initializeApp(config)
const auth = getAuth(app)
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
  signIn,
  signUp,
  signOut: logOut
}
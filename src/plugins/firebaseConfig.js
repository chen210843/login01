import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

if (!firebase.apps.length) {
    const firebaseConfig = {
        apiKey: "AIzaSyCfivVLvLpV3ltVi_aRJwv9LDFL0mKmFqc",
        authDomain: "login-4838d.firebaseapp.com",
        projectId: "login-4838d",
        storageBucket: "login-4838d.appspot.com",
        messagingSenderId: "619950874035",
        appId: "1:619950874035:web:2ba49d4a6fea608b08bfc6"
      };
  firebase.initializeApp(firebaseConfig)
}
export const shopshop = firebase.firestore()
export const auth = firebase.auth()
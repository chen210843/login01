<template>
  <div  class="container" align="center">
    <br>
    <div>
    <p class="h1 mb-2"> <b-icon icon="person-circle" style="width: 120px; height: 120px;" ></b-icon></p>
    <br>
    <b-button variant="white"  @click="loginfb"><img src="https://cdn.pixabay.com/photo/2013/01/29/22/06/facebook-76658_960_720.png" width="250" height="90"></b-button><br>
    <br> 
   <b-button variant="dark" @click="login"><img src="https://สอบบรรจุ.com/wp-content/uploads/2020/11/google_logo.png" ima height="70" width="250" > </b-button>
   </div>
  </div>
</template>
<script>
import firebase from 'firebase/app'
import { auth } from '@/plugins/firebaseConfig.js'

export default {
  data(){
    return{
       show1: false,
      user: {
        name: "",
        lastname: "",
        telephone: "",
        password: "",
      },
      // email:"",
      // password:""
    }
  },

  methods: {
    login() {
     const provider = new firebase.auth.GoogleAuthProvider()
      auth 
        .signInWithPopup(provider)
        .then((result) => {
         
          const credential = result.credential
       
          const token = credential.accessToken
          console.log('token=' + token)
         
          const user = result.user
          console.log('user=' + user)
          this.$router.replace('/home')
          // ...
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code
          console.log('error=' + errorCode)
        
          //   // ...
        })
    },
    loginfb(){
      const provider = new firebase.auth.FacebookAuthProvider();
      firebase
  .auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    const credential = result.credential;

    // The signed-in user info.
    const user = result.user;
    console.log("user=" +user)
     this.$router.replace('/home')
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const accessToken = credential.accessToken;
    console.log("Token=" + accessToken)
    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    console.log('error=' + errorCode)
    // var errorMessage = error.message;
    // // The email of the user's account used.
    // var email = error.email;
    // // The firebase.auth.AuthCredential type that was used.
    // var credential = error.credential;

    // ...
  });
    },
  },
}
</script>
<style>



</style>
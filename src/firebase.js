import firebase from "firebase";
 const config={
    apiKey: "AIzaSyAUAMk4CydZb_SjIas-wRbG3MIpnF_T7Jg",
    authDomain: "fir-otp-fe81d.firebaseapp.com",
    projectId: "fir-otp-fe81d",
    storageBucket: "fir-otp-fe81d.appspot.com",
    messagingSenderId: "821672508085",
    appId: "1:821672508085:web:02e4f5ceb584b0742d5cfc"
 }
 firebase.initializeApp(config);
 var auth=firebase.auth();
 export {auth,firebase}
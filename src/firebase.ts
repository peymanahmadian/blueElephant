import {initializeApp} from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyDdAYS1R0reI4Kl5M0AlEhf-cG473-mQGU",
    authDomain: "blueelephant-22b53.firebaseapp.com",
    databaseURL: "https://blueelephant-22b53-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "blueelephant-22b53",
    storageBucket: "blueelephant-22b53.appspot.com",
    messagingSenderId: "726714207423",
    appId: "1:726714207423:web:ae4f5b1e8de5ff84fb8a0a",
    measurementId: "G-WW0NJ0FL51"
  };
export const FireBaseApp=()=>initializeApp(firebaseConfig);

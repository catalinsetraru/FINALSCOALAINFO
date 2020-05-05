import * as firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAkxpy2nSLPUE0ENPL_cS3oHwFDNqwgHxw",
  authDomain: "scoalainfofinal.firebaseapp.com",
  databaseURL: "https://scoalainfofinal.firebaseio.com",
  projectId: "scoalainfofinal",
  storageBucket: "scoalainfofinal.appspot.com",
  messagingSenderId: "993197655633",
});

export default app;

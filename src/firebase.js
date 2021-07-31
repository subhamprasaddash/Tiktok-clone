import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDEXdkAz4TfgJSEjg8fojJXotTQKuIHoNw",
  authDomain: "tiktok-clone-5f290.firebaseapp.com",
  projectId: "tiktok-clone-5f290",
  storageBucket: "tiktok-clone-5f290.appspot.com",
  messagingSenderId: "677619520321",
  appId: "1:677619520321:web:5abd64d9f3715d8a9e87c0",
  measurementId: "G-S09KZNDWPW",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;

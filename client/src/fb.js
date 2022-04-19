import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";

export const app = firebase.initializeApp({
  projectId: "storage-dulce-salao",
  appId: "1:638408568251:web:53a1eedae4f470094da89e",
  storageBucket: "storage-dulce-salao.appspot.com",
  locationId: "us-central",
  apiKey: "AIzaSyBb2qolCkFzw4KLYbJwvQ_w5Mp3ZVpXBt8",
  authDomain: "storage-dulce-salao.firebaseapp.com",
  messagingSenderId: "638408568251",
  measurementId: "G-81B0G3L25B",
});

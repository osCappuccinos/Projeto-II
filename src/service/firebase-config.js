import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"
//import { getAnalytics } from "firebase/analytics";

let  firebaseConfig = {
  apiKey: "AIzaSyCJZPiAZSUSYrDzA2y-bv2gAevWpFDp4WQ",
  authDomain: "projeto-ruma.firebaseapp.com",
  projectId: "projeto-ruma",
  storageBucket: "projeto-ruma.appspot.com",
  messagingSenderId: "795297376032",
  appId: "1:795297376032:web:695df20e0e68ee7a2f9945",
  measurementId: "G-785L9D56EK"
};

/**
if (location.hostname === 'localhost') {
  firebaseConfig = {
    databaseURL: 'http://localhost:9000?ns=projeto-ruma'
  }
}
*/


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getDatabase();
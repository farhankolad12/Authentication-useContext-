import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAGjcgGVG88RTyxPwznj2_93H9DIlLiiZw",
  authDomain: "first-react-app-fd743.firebaseapp.com",
  projectId: "first-react-app-fd743",
  storageBucket: "first-react-app-fd743.appspot.com",
  messagingSenderId: "685145731843",
  appId: "1:685145731843:web:e8a38406d0ae56afedaf36",
  measurementId: "G-4PETB48ZDH",
};

// Initialize Firebase
const app = firebase.default.initializeApp(firebaseConfig);

const auth = app.auth();
export default auth;

// Import the functions you need from the SDKs you need
import { firebase, initializeApp } from "firebase/app";
// Required for side-effects
import "firebase/firestore"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCd9h12A2MZzbBOGvjhBM86_IijGk8PY0A",
  authDomain: "hayfam-contact.firebaseapp.com",
  projectId: "hayfam-contact",
  storageBucket: "hayfam-contact.appspot.com",
  messagingSenderId: "911155204117",
  appId: "1:911155204117:web:5a98b2a83f9eac44e5be1c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize db
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);



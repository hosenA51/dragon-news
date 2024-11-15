// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZqER9fw1Rl1ycxINtvsWcad31A04Bs_A",
  authDomain: "dragon-news-bb029.firebaseapp.com",
  projectId: "dragon-news-bb029",
  storageBucket: "dragon-news-bb029.firebasestorage.app",
  messagingSenderId: "733589694532",
  appId: "1:733589694532:web:c4e2c26c7ae9d232a0b411"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
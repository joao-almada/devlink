
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA6zedh1owVcaph9XzR2ItPyCAUug4R_ps",
  authDomain: "reactlinks-26a62.firebaseapp.com",
  projectId: "reactlinks-26a62",
  storageBucket: "reactlinks-26a62.firebasestorage.app",
  messagingSenderId: "390750898249",
  appId: "1:390750898249:web:b6cdbdf1e3381b99a05798"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
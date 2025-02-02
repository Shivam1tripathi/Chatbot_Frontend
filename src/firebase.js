import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDlzB55Rg4vz_91LdRaoy5Ibhu0b9a3Nn0",
  authDomain: "chatbotfrontend.firebaseapp.com",
  projectId: "chatbotfrontend",
  storageBucket: "chatbotfrontend.firebasestorage.app",
  messagingSenderId: "526136328849",
  appId: "1:526136328849:web:eca39dff453ccef7bbf530",
  measurementId: "G-Y3MFMF8GDG",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

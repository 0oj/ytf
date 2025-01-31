import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDm7QlPY1Uibxkh9q0yIIRgqlWQSK4FJO4",
  authDomain: "ytf-ooj-foo.firebaseapp.com",
  projectId: "ytf-ooj-foo",
  storageBucket: "ytf-ooj-foo.firebasestorage.app",
  messagingSenderId: "782727358902",
  appId: "1:782727358902:web:823c4c451ba855cdc7f917"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };

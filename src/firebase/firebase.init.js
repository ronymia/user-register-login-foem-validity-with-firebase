import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCbwlS5_6bTyG7mDqKXFpjKDJbjTVwzPpk",
    authDomain: "react-form-validity.firebaseapp.com",
    projectId: "react-form-validity",
    storageBucket: "react-form-validity.appspot.com",
    messagingSenderId: "301385429818",
    appId: "1:301385429818:web:cdb2930768e0af98211603",
    measurementId: "G-XPNBQ165S7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
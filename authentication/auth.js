// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC_NUgyKMPSAhhWQ7DL1wCJsWIcXu9-tI0",
    authDomain: "jsi16-aaabc.firebaseapp.com",
    projectId: "jsi16-aaabc",
    storageBucket: "jsi16-aaabc.appspot.com",
    messagingSenderId: "698147288674",
    appId: "1:698147288674:web:931e83293a470d8601033b"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

document.getElementById("btn-sign-up").addEventListener("click", () => {
    const email = document.getElementById("sign-up-email").value;
    const password = document.getElementById("sign-up-password").value;
    const passwordConfirm = document.getElementById(
        "sign-up-confirmed-password"
    ).value;
    console.log({
        email,
        password,
        passwordConfirm,
    });

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
            alert("Sign up success");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("ERROR");
            // ..
        });
});
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyABMd_rxJgDmULab6256_zO2hSwoZLAUnY",
    authDomain: "eventbooking-e2874.firebaseapp.com",
    projectId: "eventbooking-e2874",
    storageBucket: "eventbooking-e2874.appspot.com",
    messagingSenderId: "897665913839",
    appId: "1:897665913839:web:061f4a528120ba96589c1a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};
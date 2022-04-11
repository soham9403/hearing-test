
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyCcv1GH5jbC27fxMq-KjIzgQcwaeA44pek",
    authDomain: "wehear-ox.firebaseapp.com",
    databaseURL: "https://wehear-ox.firebaseio.com",
    projectId: "wehear-ox",
    storageBucket: "wehear-ox.appspot.com",
    messagingSenderId: "405225062033",
    appId: "1:405225062033:web:8de4b9ad627383710d0930",
    measurementId: "G-L5ZTHWHRB3"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
export { firebaseApp };
export default db;
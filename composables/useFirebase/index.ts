import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
export const useFirebase = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyCTq4mLJAgOwsbhOyqgrHvEf0q07eMIlgo",
        authDomain: "todolist-zanaboni.firebaseapp.com",
        projectId: "todolist-zanaboni",
        storageBucket: "todolist-zanaboni.appspot.com",
        messagingSenderId: "1065408959026",
        appId: "1:1065408959026:web:5ca6a9f1fc1395cbaf622b"
    };
    const app = initializeApp(firebaseConfig);
    const firestore = getFirestore(app);
    return {firestore};
};
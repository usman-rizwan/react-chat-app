import { initializeApp, } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc, getDocs, collection, query, where, onSnapshot, addDoc, orderBy } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDdlAwziGJco76KXmyC0IxYG6xezF8DsoI",
    authDomain: "fir-project-e4ba5.firebaseapp.com",
    databaseURL: "https://fir-project-e4ba5-default-rtdb.firebaseio.com",
    projectId: "fir-project-e4ba5",
    storageBucket: "fir-project-e4ba5.appspot.com",
    messagingSenderId: "134924113333",
};

initializeApp(firebaseConfig)

const auth = getAuth();
const db = getFirestore();

export {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    db,
    doc,
    setDoc,
    getDoc,
    getDocs,
    collection,
    query,
    where,
    onSnapshot,
    addDoc,
    orderBy
};
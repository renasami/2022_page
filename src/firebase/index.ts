import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { firebaseConfig } from './config';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage'
export const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth();
export const store = getFirestore();
export const storage = getStorage();

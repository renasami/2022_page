import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app';
import { firebaseConfig, emulatorPorts } from './firebase/config';
import { connectAuthEmulator } from "firebase/auth";
import {connectFirestoreEmulator } from "firebase/firestore"
import { connectStorageEmulator } from "firebase/storage"
import {auth, store, storage} from "./firebase"


initializeApp(firebaseConfig)
const localhost = "http://localhost:"
if (window.location.hostname === "localhost") {
  connectAuthEmulator(auth,localhost + emulatorPorts["auth"])
  // connectFirestoreEmulator(store,localhost, Number(emulatorPorts["store"]))
  connectStorageEmulator(storage,localhost, Number(emulatorPorts["storage"]))
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

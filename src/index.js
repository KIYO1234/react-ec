import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/components/App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import store from './store/index'
// 非同期処理をするためthunkをimport
// import thunk from 'redux-thunk'
// firebase
import firebase from 'firebase'

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// firebase
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCsgn15-5Sp0RuZZslAUp3aKUmQESYryfQ",
  authDomain: "react-ec-8ac68.firebaseapp.com",
  projectId: "react-ec-8ac68",
  storageBucket: "react-ec-8ac68.appspot.com",
  messagingSenderId: "756803294550",
  appId: "1:756803294550:web:5f96be51c42258f3fbf2f7",
  measurementId: "G-0G97KKJMR0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

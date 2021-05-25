import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/components/App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
// 元々はstore/indexを作ってた
// import store from './store/index'
// firebase
import firebase from 'firebase'

//rakutenApi.js用
import MapState from './components/MapState'
// 非同期処理をするためthunkをimport
import thunk from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux'
// reducers/index.js 内で export default combineReducersとしていたものをここではreducerという名前でimport
import reducer from './reducers/index'
import {
  BrowserRouter as Router,
  Switch,Route, 
} from 'react-router-dom'
import {Details} from './components/Details'
import Individual from './components/Individual'


const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store = {store}>
  <Router>
    {/* <App /> */}
    <Switch>
        <Route path='/details'><Details /></Route>
        {/* 受け取る側では:itemId?で動的ルーティング&オプション化 */}
        <Route path='/individual/:itemId?'><Individual /></Route>
        <Route path='/'><MapState /></Route>
    </Switch>
  </Router>
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

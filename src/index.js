import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {ThemeProvider} from "styled-components";

import * as firebase from 'firebase';
import App from './components/App';
import store from "./store";
import theme from './styles/theme';
import ProductstoreService from './services';
import {ProductstoreServiceProvider} from "./components/ProductServiceContext";

const firebaseConfig = {
    apiKey: "AIzaSyCFCZNM2Gr78RpyFE8jD-ro6oqYU7Km6xI",
    authDomain: "fir-test-d943b.firebaseapp.com",
    databaseURL: "https://fir-test-d943b.firebaseio.com",
    projectId: "fir-test-d943b",
    storageBucket: "fir-test-d943b.appspot.com",
    messagingSenderId: "30561993070",
    appId: "1:30561993070:web:98cdebbdcbd06cc4cb417f"
};

const productstoreService = new ProductstoreService();
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
    <p>asdasdasdas</p>,
  document.getElementById('root')
);


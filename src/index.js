import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {ThemeProvider} from "styled-components";

import App from './components/App';
import store from "./store";
import theme from './styles/theme';
import ProductstoreService from './services';
import {ProductstoreServiceProvider} from "./components/ProductServiceContext";

const productstoreService = new ProductstoreService();

ReactDOM.render(
    <Provider store={store} >
        <ProductstoreServiceProvider value={productstoreService} >
            <ThemeProvider theme={theme}>
               <App />
            </ThemeProvider>
        </ProductstoreServiceProvider>
    </Provider>
        ,
  document.getElementById('root')
);


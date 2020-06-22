import {createStore, applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk';

import reducer from "./reducers";

const logMiddleware = (store) => (next) => (action) => {
    console.log(action.type, store.getState());
    return next(action)
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware, logMiddleware));


export default store;
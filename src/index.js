import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers } from 'redux';

import {Provider} from 'react-redux';


const firstReducer = (state=0, action) => {
    if (action.type=== 'BUTTON_ONE') {
        console.log("button one clicked")
        return state +1;
    }
    
    return state;
}
const anotherReducer = (state=100, action) => {
    if (action.type=== 'BUTTON_TWO') {
    console.log("button two clicked")
    return state-1;
    }
    return state;
}
const elementListReducer = (state=[], action) => {
    if (action.type=== 'ADD_ELEMENT') {
    console.log(`The Element was ${action.payload}`);
    return [...state, action.payload];
    
    }
    return state;
}
const storeInstance = createStore(
    // this is a reducer
    combineReducers({
        firstReducer,
        anotherReducer,
        elementListReducer
    })
   
  
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


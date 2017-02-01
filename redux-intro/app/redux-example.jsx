
import {createStore} from 'redux';
// var Redux = require('redux');

console.log('starting redux example');

//must be a pure function - the Reducer
const reducer = (state = {name: 'Anonymous'}, action) => {

  // state passed in is the CURRENT state
  // action is the action that was triggered

  return state;

};

const store = createStore(reducer);

const currentState = store.getState();

console.log('Current State ', currentState);


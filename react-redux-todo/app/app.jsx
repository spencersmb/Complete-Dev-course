import react from 'react';
const React = react;
var ReactDOM = require('react-dom');
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

//import Redux stuff
import TodoApp from 'TodoApp';
import {Provider} from 'react-redux';
import {config}  from 'storeConfig';
import TodoApi from 'TodoApi';
import * as actions from 'actions';
const store = config();

//get initial todos and bulk add them to Redux
//getTodos checks localStorage
const initialTodos = TodoApi.getTodos();

//After you get them from LocalStorage - add them to redux!
store.dispatch(actions.addTodos(initialTodos));

//check state on Redux change, and setTodos to localstorage each change
store.subscribe( () => {
  let state = store.getState();

  //add todos everytime state updates
  TodoApi.setTodos(state.todos);

  // console.log('New State', state);
});

$(document).foundation();

// Load Custom App CSS
require('style!css!sass!applicationStyles');

//Wrap app inside provider and pass in the store object
ReactDOM.render(
    <Provider store={store}>
      <TodoApp />
    </Provider>,
  document.getElementById('app')
);

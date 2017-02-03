import react from 'react';
const React = react;
var ReactDOM = require('react-dom');
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

//import Redux stuff
import {Provider} from 'react-redux';
import * as actions from './actions/actions';
import {config}  from 'storeConfig';
const store = config();

//check state in console.log
store.subscribe( () => {
  // console.log('New State', store.getState());
});

// store.dispatch(actions.addTodo('Give nuna a bath'));
// store.dispatch(actions.setSearchText('dog'));
// store.dispatch(actions.toggleShowCompleted());

// Import Componentss
import TodoApp from 'TodoApp';

$(document).foundation();

// Load Custom App CSS
require('style!css!sass!applicationStyles');

ReactDOM.render(
    <Provider store={store}>
      <TodoApp />
    </Provider>,
  document.getElementById('app')
);

import react from 'react';
const React = react;
var ReactDOM = require('react-dom');
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

// Import Components
import Main from 'Main';

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// Load Custom App CSS
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
      <Route path="/" component={Main}>
      </Route>
  </Router>,
  document.getElementById('app')
);

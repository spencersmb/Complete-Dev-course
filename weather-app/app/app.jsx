import react from 'react';
const React = react;
var ReactDOM = require('react-dom');
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

// Import Components
import Main from 'Main';
import Weather from 'Weather';
import About from 'About';
import Examples from 'Examples';

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// Load Custom App CSS
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <Route path="about" component={About} />
        <Route path="examples" component={Examples} />
        <IndexRoute component={Weather}/>
      </Route>
  </Router>,
  document.getElementById('app')
);

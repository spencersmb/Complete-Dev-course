import react from 'react';
const React = react;
var ReactDOM = require('react-dom');
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

// Import Componentss


// Load foundation manually
// require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// Load Custom App CSS
require('style!css!sass!applicationStyles');

// ReactDOM.render(
//     <p>Boilerplate 3 project</p>,
//   // <Router history={hashHistory}>
//   //     <Route path="/" component={Main}>
//   //         <Route path="countdown" component={Countdown} />
//   //         <IndexRoute component={Timer}/>
//   //     </Route>
//   // </Router>,
//   document.getElementById('app')
// );

require('./redux-example.jsx');
// require('./redux-todo-example.jsx');

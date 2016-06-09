var React = require('react');
var ReactDOM = require('react-dom');

var objOne = {
    name: 'andrew',
    location: 'New York'
};

var objTwo = {
    age: 25,
    ...objOne
};

ReactDOM.render(
  // Greeter is always a wrapper or root component and is required for Best practice
  // This container does maintain state so the components inside are dummy
  // Root renders child components and is the water fall effect of data
  // Everytime Red update states - the children can update
  <h1>Boilerplate app with Live reload!</h1>,
  document.getElementById('app')
);

var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('Greeter');
var data = "Teela"



ReactDOM.render(
  // Greeter is always a wrapper or root component and is required for Best practice
  // This container does maintain state so the components inside are dummy
  // Root renders child components and is the water fall effect of data
  // Everytime Red update states - the children can update
  <Greeter name={data} message="Message from prop!"/>,
  document.getElementById('app')
);

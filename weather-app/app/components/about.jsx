import react from 'react';
const React = react;

// example of stateless component because it doesnt use state
let About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>Welcome to the about page</p>
    </div>
  );
};


module.exports = About;
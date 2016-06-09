import react from 'react';
const React = react;
import {Link} from 'react-router';


let Examples = (props) => {
  return (
    <div>
      <h1 className="text-center">examples</h1>
      <p>Here are a few example locations to try out</p>
      <ol>
        <li>
          <Link to="/?location=Philadelphia">Philadelphia, PA</Link>
        </li>
        <li>
          <Link to="/?location=Denver">Denver, CO</Link>
        </li>
      </ol>
    </div>
  );
};

module.exports = Examples;

var React = require('react');
var ReactDOM = require('react-dom');

// this.props.children is from the router to render content inside it - like transclusion
let Main = (props) => {
  return (
    <div>
      <div className="row">
        <div className="columns small-centered medium-6 large-4">
          <h1>Webpack Boilerplate V.2</h1>
        {props.children}
        </div>
      </div>
    </div>
  );
};
module.exports = Main;
var React = require('react');
var ReactDOM = require('react-dom');

class TodoItem extends React.Component {

  render(){
    let {id, text} = this.props;
    return(
        <li key={id}>{id}. {text}</li>
    )
  }
}
module.exports = TodoItem;
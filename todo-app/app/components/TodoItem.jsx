var React = require('react');
var ReactDOM = require('react-dom');

class TodoItem extends React.Component {

  constructor(){
    super();
    this.handleCheck = this.handleCheck.bind(this);
  }

  handleCheck(){
    // function passed from todoApp -> todoList -> this item
    this.props.onToggle(this.props.id);
  }

  render(){
    let {id, text, completed} = this.props;
    return(
        <div>
          <input type="checkbox" checked={completed} onChange={this.handleCheck}/>
          {text}
        </div>
    )
  }
}
module.exports = TodoItem;
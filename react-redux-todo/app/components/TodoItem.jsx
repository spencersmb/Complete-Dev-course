var React = require('react');
var ReactDOM = require('react-dom');
let moment = require('moment');

//redux stuff
import {connect} from 'react-redux';
import * as actions from './../actions/actions';

export class TodoItem extends React.Component {

  constructor(){
    super();
    this.handleCheck = this.handleCheck.bind(this);
  }

  
  handleCheck(){
    // function passed from todoApp -> todoList -> this item
    // this.props.onToggle(this.props.id);
    this.props.dispatch(actions.toggleTodo(this.props.id));
  }

  render(){
    let {id, text, completed, createdAt, completedAt, dispatch} = this.props;
    let renderDate = () => {
      var message = "Created ";
      var timeStamp = createdAt;

      if(completed){
        message = "Completed ";
        timeStamp = completedAt;
      }

      return message + moment.unix(timeStamp).format('MMM Do, YYYY @ h:mm a');
    };

    return(
        <li>
          <input type="checkbox" checked={completed} onChange={this.handleCheck}/>
          <p>{text}</p>
          <p>{renderDate()}</p>

        </li>
    )
  }
}


//this component doesnt need the list of todos, that is getting passed down from todo list,
// it needs the ability to dispatch changes
// module.exports = connect()(TodoItem);
export default connect()(TodoItem);
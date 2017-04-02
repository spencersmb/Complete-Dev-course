var React = require('react');
var ReactDOM = require('react-dom');
import {connect} from 'react-redux';
import TodoItem from 'TodoItem';
import TodoApi from 'TodoApi';

export class TodoList extends React.Component {

  render(){

    let {todos, showCompleted, searchText} = this.props;

    let renderTodos = () => {

      //Check for todos
      if(todos.length === 0){
        return (
          <p>Nothing to do!</p>
        )
      }

      // this returns a new array of the items to render that are FILTERED:
      // by showCompleted is true or not,
      // by search text,
      // Sort todos with non-completed first

      return TodoApi.filterTodos(todos, showCompleted, searchText).map( (todo) => {
        return(

          // {...to/do } shorthand way of passing all props down onto the item
          <TodoItem key={todo.id} {...todo} />
        );
      });

    };

    return(
      <div>
        <ul className="todo-list">
          {renderTodos()}
        </ul>
      </div>
    )
  }
}

//do a connection, then connect it to the list
export default connect(
  //define which pieces of state we want
  (state) => {
    return state; //this automatically gets set on the props of the item
  }
)(TodoList);
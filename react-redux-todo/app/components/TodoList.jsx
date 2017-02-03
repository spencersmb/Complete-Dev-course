var React = require('react');
var ReactDOM = require('react-dom');
import {connect} from 'react-redux';
import TodoItem from 'TodoItem';
import TodoApi from 'TodoApi';

export class TodoList extends React.Component {

  render(){
    console.log(this.props);
    let {todos, showCompleted, searchText} = this.props;

    let renderTodos = () => {

      if(todos.length === 0){
        return (
          <p>Nothing to do!</p>
        )
      }

      // this returns a new array of the items to render
      //send items through filter first
      return TodoApi.filterTodos(todos, showCompleted, searchText).map( (todo) => {
        return(
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
    return state; //this automaitcally gets set on the props of the item
  }
)(TodoList);
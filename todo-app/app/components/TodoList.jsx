var React = require('react');
var ReactDOM = require('react-dom');

import TodoItem from 'TodoItem';

class TodoList extends React.Component {


  render(){
    let {todoList} = this.props;
    let renderTodos = () => {

      // this returns a new array of the items to render
      return todoList.map((todo) => {
        return(
            <TodoItem key={todo.id} {...todo}/>
        );
      });

    };

    return(
      <div>
        {renderTodos()}
      </div>
    )
  }
}
module.exports = TodoList;
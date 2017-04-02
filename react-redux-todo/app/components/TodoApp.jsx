var React = require('react');
var ReactDOM = require('react-dom');

import TodoList from 'TodoList';
import TodoAdd from 'TodoAdd';
import TodoSearch from 'TodoSearch';

export class TodoApp extends React.Component {

  constructor(){
    super();
    
    //No need to set initial state since Redux is handeling state.
    // this.state = {
    //   showCompleted: false,
    //   searchText: '',
    //   todos: TodoApi.getTodos()
    // }
    
  }
  //Since redux is handeling state - we no longer need this lifecycle to watch props for changes
  // componentDidUpdate(){
  //   // This gets fired when the props or state updates
  //   // This updates even when the filter fires but for now its fine
  //   TodoApi.setTodos(this.state.todos);
  // }

  render(){

    return (
      <div>
        <div className="row">
          <div className="small-6 large-centered columns">
            <h3 className="text-center page-title">Main Todo App Container</h3>
            <TodoSearch />
            <TodoList />
            <TodoAdd />
          </div>
        </div>
      </div>
    )
  }
}

export default TodoApp;
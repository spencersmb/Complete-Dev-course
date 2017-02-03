var React = require('react');
var ReactDOM = require('react-dom');
let uuid = require('node-uuid');
let moment = require('moment');

import TodoList from 'TodoList';
import TodoAdd from 'TodoAdd';
import TodoSearch from 'TodoSearch';
import TodoApi from 'TodoApi';

export class TodoApp extends React.Component {

  constructor(){
    super();
    this.handleSearch = this.handleSearch.bind(this);

    this.state = {
      showCompleted: false,
      searchText: '',
      todos: TodoApi.getTodos()
    }
    
  }
  componentDidUpdate(){
    // This gets fired when the props or state updates
    // This updates even when the filter fires but for now its fine
    TodoApi.setTodos(this.state.todos);
  }

  handleSearch(showCompleted, searchText){
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  }

  // handleCheckboxToggle(id){
  //
  //   // Map over state of todoItems to find a match
  //   let updatedTodos = this.state.todos.map((todo)=>{
  //     if(todo.id === id){
  //       todo.completed = !todo.completed;
  //       todo.completedAt = todo.completed ? moment().unix() : undefined;
  //     }
  //     return todo;
  //   });
  //
  //   this.setState({todos: updatedTodos});
  // }

  render(){
  // let {todos, showCompleted, searchText} = this.state;
  // let filteredTodos = TodoApi.filterTodos(todos, showCompleted, searchText);

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
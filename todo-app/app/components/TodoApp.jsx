var React = require('react');
var ReactDOM = require('react-dom');
let uuid = require('node-uuid');

import TodoList from 'TodoList';
import TodoAdd from 'TodoAdd';
import TodoSearch from 'TodoSearch';
import TodoApi from 'TodoApi';

class TodoApp extends React.Component {


  constructor(){
    super();
    this.addTodo = this.addTodo.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleCheckboxToggle = this.handleCheckboxToggle.bind(this);

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
  addTodo(todoText){

    this.setState({
      todos: [
          // insert original todoarray items
          ...this.state.todos,
        {
          id: uuid(),
          text: todoText,
          completed: false
        }
      ]
    });
  }

  handleSearch(showCompleted, searchText){
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  }

  handleCheckboxToggle(id){

    // Map over state of todoItems to find a match
    let updatedTodos = this.state.todos.map((todo)=>{
      if(todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo;
    });

    this.setState({todos: updatedTodos});
  }

  render(){
  let {todos, showCompleted, searchText} = this.state;
  let filteredTodos = TodoApi.filterTodos(todos, showCompleted, searchText);

    return (
      <div>
        <div className="row">
          <div className="small-6 large-centered columns">
            <h3 className="text-center page-title">Main Todo App Container</h3>
            <TodoSearch onSearch={this.handleSearch}/>
            <TodoList todoList={filteredTodos} onToggle={this.handleCheckboxToggle}/>
            <TodoAdd addTodo={this.addTodo} />
          </div>
        </div>
      </div>
    )
  }
}

module.exports = TodoApp;
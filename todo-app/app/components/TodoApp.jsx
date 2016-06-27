var React = require('react');
var ReactDOM = require('react-dom');
let uuid = require('node-uuid');

import TodoList from 'TodoList';
import TodoAdd from 'TodoAdd';
import TodoSearch from 'TodoSearch';

class TodoApp extends React.Component {


  constructor(){
    super();
    this.addTodo = this.addTodo.bind(this);
    this.handleSearch = this.handleSearch.bind(this);

    this.state = {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: 1,
          text: 'walk the dog'
        },
        {
          id: 2,
          text: 'clean the yard'
        },
        {
          id: 3,
          text: 'Do the dishes'
        },
        {
          id: 4,
          text: 'Moe the lawn'
        }
      ]
    }
    
  }
  addTodo(todoText){

    this.setState({
      todos: [
          // insert original todoarray items
          ...this.state.todos,
        {
          id: uuid(),
          text: todoText
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

  render(){
  let {todos} = this.state;

    return (
      <div>
        <div className="row">
          <div className="small-6 large-centered columns">
            <h3 className="text-center page-title">Main Todo App Container</h3>
            <TodoSearch onSearch={this.handleSearch}/>
            <TodoList todoList={todos}/>
            <TodoAdd addTodo={this.addTodo} />
          </div>
        </div>
      </div>
    )
  }
}

module.exports = TodoApp;
var React = require('react');
var ReactDOM = require('react-dom');

import TodoList from 'TodoList';

class TodoApp extends React.Component {

  constructor(){
    super();

    this.state = {
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

  render(){
  let {todos} = this.state;

    return (
      <div>
        <div className="row">
          <div className="columns small-center medium-6 large-4">
            <h3>Main Todo App Container</h3>
            <TodoList todoList={todos}/>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = TodoApp;
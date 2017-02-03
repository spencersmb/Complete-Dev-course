var expect = require('expect');
import react from 'react';
const React = react;
var ReactDOM = require('react-dom');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import { Provider } from 'react-redux';
import ConnectedTodoList, { TodoList } from 'TodoList';
import ConnectedTodoItem, { TodoItem } from 'TodoItem';
import { config }  from 'storeConfig';


describe('TodoList', () => {

  it('Should Exist', () => {
    expect(TodoList).toExist();
  });

  it('Should Render one todolist Component for each item', () => {
    let todos = [
      {
        id: 1,
        text: 'walk the dog',
        completed: false,
        completedAt: undefined,
        createdAt: 500
      },
      {
        id: 2,
        text: 'clean the yard',
        completed: false,
        completedAt: undefined,
        createdAt: 500
      }
    ];

    //pass initial state
    const store = config({
      todos
    });

    const provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedTodoList />
      </Provider>
    );

    //fetch list from provider
    const todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];

    // This will test how many components are rendered and returns an array
    let todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodoItem);

    expect(todosComponents.length).toBe(todos.length);

  });

});
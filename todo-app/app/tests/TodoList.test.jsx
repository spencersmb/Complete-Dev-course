var expect = require('expect');
import react from 'react';
const React = react;
var ReactDOM = require('react-dom');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoList = require('TodoList');
var TodoItem = require('TodoItem');

describe('TodoList', () => {
  it('Should Exist', () => {
    expect('TodoList').toExist;
  });
  it('Should Render one todolist Component for each item', () => {
    let todos = [
      {
        id: 1,
        text: 'walk the dog'
      },
      {
        id: 2,
        text: 'clean the yard'
      }
        ];
    let todoList = TestUtils.renderIntoDocument(<TodoList todoList={todos} />);

    // This will test how many components are rendered and returns an array
    let todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, TodoItem);

    expect(todosComponents.length).toBe(todos.length);

  });

});
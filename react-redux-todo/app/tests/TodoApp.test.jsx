var expect = require('expect');
import react from 'react';
const React = react;
var ReactDOM = require('react-dom');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');


describe('TodoApp', () => {
  it('Should exist', () => {
    expect(TodoApp).toExist();
  });

  it('Should add todo to the todos state on addTodo()', () => {
    let todoApp = TestUtils.renderIntoDocument(<TodoApp />);

    //set state to 0 to easily test
    todoApp.setState({todos:[]});
    todoApp.addTodo("test");

    expect(todoApp.state.todos.length).toBe(1);
    expect(todoApp.state.todos[0].text).toBe("test");

    // test for date
    expect(todoApp.state.todos[0].createdAt).toBeA("number");
  });

  it('Should toggle the todoItem with handleCheckboxToggle to true', () => {

    // Use fake data because eventually static data in the app will be dynamic
    let todoItem = {
      id: 11,
      text: 'test',
      completed: false,
      createdAt: 0,
      completedAt: undefined
    };

    let todoApp = TestUtils.renderIntoDocument(<TodoApp />);
    todoApp.setState({todos:[todoItem]});

    expect(todoApp.state.todos[0].completed).toBe(false);

    // toggle check box
    todoApp.handleCheckboxToggle(todoApp.state.todos[0].id);
    expect(todoApp.state.todos[0].completed).toBe(true);

    expect(todoApp.state.todos[0].completedAt).toBeA("number");
  });

  it('Should toggle the todoItem with handleCheckboxToggle to false', () => {

    // Use fake data because eventually static data in the app will be dynamic
    let todoItem = {
      id: 11,
      text: 'test',
      completed: true,
      createdAt: 0,
      completedAt: 0
    };

    let todoApp = TestUtils.renderIntoDocument(<TodoApp />);
    todoApp.setState({todos:[todoItem]});

    expect(todoApp.state.todos[0].completed).toBe(true);

    // toggle check box
    todoApp.handleCheckboxToggle(todoApp.state.todos[0].id);
    expect(todoApp.state.todos[0].completed).toBe(false);

    expect(todoApp.state.todos[0].completedAt).toNotExist();
  });
});
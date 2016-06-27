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
  });
});
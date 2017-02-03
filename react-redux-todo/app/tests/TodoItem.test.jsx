var expect = require('expect');
import react from 'react';
const React = react;
var ReactDOM = require('react-dom');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

// var TodoItem = require('TodoItem');
//must grab raw react component
import { TodoItem } from 'TodoItem';

describe('TodoItem', () => {
  it('Should exist', () => {
    expect(TodoItem).toExist();
  });

  it('Should dispatch TOGGLE_TODO action on click', () => {
    let todoData={
      id: 12,
      text: "test text",
      completed: true
    };

    let spy = expect.createSpy();
    let todoItem = TestUtils.renderIntoDocument(<TodoItem {...todoData} dispatch={spy}/>);
    let $el = $(ReactDOM.findDOMNode(todoItem));
    let input = $el.find('input[type="checkbox"]');

    TestUtils.Simulate.change(input[0]);
    expect(spy).toHaveBeenCalledWith({
      type: 'TOGGLE_TODO',
      id: todoData.id
    });

  });
});
import react from 'react';
const React = react;
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

// var TodoAdd = require('TodoAdd');
import {TodoAdd} from 'TodoAdd';

describe('TodoAdd', () => {
  it('Should Exist', () => {
    expect(TodoAdd).toExist();
  });

  it('Should dispatch ADD_TODO action on click', () => {
    let todoText = "check mail";

    let spy = expect.createSpy();
    let inputForm = TestUtils.renderIntoDocument(<TodoAdd dispatch={spy}/>);
    let $el = $(ReactDOM.findDOMNode(inputForm));

    // set fake input value to test
    inputForm.refs.todoInput.value = todoText;

    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith({
      type: 'ADD_TODO',
      text: todoText
    });

  });

  it('Should not call addTodo if invalid text entered', () => {
    let todoText = '';

    let spy = expect.createSpy();
    let inputForm = TestUtils.renderIntoDocument(<TodoAdd dispatch={spy}/>);
    let $el = $(ReactDOM.findDOMNode(inputForm));

    // set fake input value to test
    inputForm.refs.todoInput.value = todoText;

    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();

  });
});
var expect = require('expect');
import react from 'react';
const React = react;
var ReactDOM = require('react-dom');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import {Provider} from 'react-redux';
import {config}  from 'storeConfig';
import TodoApp from 'TodoApp';
import TodoList from 'TodoList';


describe('TodoApp', () => {
  it('Should exist', () => {
    expect(TodoApp).toExist();
  });

  //test if the list was rendered
  it('Should Render todo list', () => {
    
    //mock provider and store
    const store = config();
    const provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <TodoApp />
      </Provider>
    );

    //fetch components defined in parenthises - search through renderinto document for the first TodoApp Item
    const todoApp = TestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0]; //grab the first item

    //looking for TodoList inside todoApp
    const todoList = TestUtils.scryRenderedComponentsWithType(todoApp, TodoList);

    expect(todoList.length).toEqual(1);
  });

});
let expect = require('expect');
import react from 'react';
const React = react;
let ReactDOM = require('react-dom');
let $ = require('jQuery');
let TestUtils = require('react-addons-test-utils');

// let TodoSearch = require('TodoSearch');
import {TodoSearch} from 'TodoSearch';


describe('TodoSearch', () => {
  it("Should Exist", () => {
    expect(TodoSearch).toExist();
  });

  it("Should dispatch SET_SEARCH_TEXT action on click", () => {
    let spy = expect.createSpy();
    let searchText = "search";
    let inputForm = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);
    let $el = $(ReactDOM.findDOMNode(inputForm));

    // set input value
    inputForm.refs.searchText.value = searchText;

    // Simulate change
    TestUtils.Simulate.change(inputForm.refs.searchText);

    // call false here because its the first of two arguments that get passed
    expect(spy).toHaveBeenCalledWith({
      type: 'SET_SEARCH_TEXT',
      searchText
    });
  });


  it("Should dispatch TOGGLE_SHOW_COMPLETED action on click", () => {
    let spy = expect.createSpy();
    let inputForm = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);
    let $el = $(ReactDOM.findDOMNode(inputForm));

    // set input value
    inputForm.refs.showCompleted.checked = true;

    // Simulate change
    TestUtils.Simulate.change(inputForm.refs.showCompleted);

    expect(spy).toHaveBeenCalledWith({
      type: 'TOGGLE_SHOW_COMPLETED'
    });
  });
});
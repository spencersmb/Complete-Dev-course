let expect = require('expect');
import react from 'react';
const React = react;
let ReactDOM = require('react-dom');
let $ = require('jQuery');
let TestUtils = require('react-addons-test-utils');

let TodoSearch = require('TodoSearch');

describe('TodoSearch', () => {
  it("Should Exist", () => {
    expect("TodoSearch").toExist();
  });

  it("Should Call on Search with entered input text", () => {
    let spy = expect.createSpy();
    let searchText = "search";
    let inputForm = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);
    let $el = $(ReactDOM.findDOMNode(inputForm));

    // set input value
    inputForm.refs.searchText.value = searchText;

    TestUtils.Simulate.change(inputForm.refs.searchText);

    // call false here because its the first of two arguments that get passed
    expect(spy).toHaveBeenCalledWith(false, searchText);
  });

  it("Should Call on Search proper checked value", () => {

  });
});
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
});
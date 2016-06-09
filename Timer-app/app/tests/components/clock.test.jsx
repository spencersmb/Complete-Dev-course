import react from 'react';
const React = react;
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Clock = require('Clock');


describe('Clock', () => {
   it('Should exist', () => {
       expect(Clock).toExist();
   })
});

describe('formatSeconds', () => {
    it('Should format the time', () => {
        //import the component into this doc
        let clock = TestUtils.renderIntoDocument(<Clock />);
        var seconds = 615;
        let expected = '10:15';
        let actual = clock.formatSeconds(seconds);

        expect(actual).toBe(expected);
    });
    it('Should format the time when min.sec is less than 10', () => {
        //import the component into this doc
        let clock = TestUtils.renderIntoDocument(<Clock />);
        var seconds = 61;
        let expected = '01:01';
        let actual = clock.formatSeconds(seconds);

        expect(actual).toBe(expected);
    })
});

describe('Render', ()=>{
    it('Should render clock to output', ()=>{
        var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>);
        var $el = $(ReactDOM.findDOMNode(clock));
        var actualText = $el.find('.clock-text').text();

        expect(actualText).toBe('01:02');
    });
});
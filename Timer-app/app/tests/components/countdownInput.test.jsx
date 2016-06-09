import react from 'react';
const React = react;
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var CountdownInput = require('CountdownInput');

describe('CountdownInput', () => {
    it('Should exist', () => {
        expect(CountdownInput).toExist();
    });

    it('Should call onSetCountdown if valid seconds entered', () =>{
        var spy = expect.createSpy();
        var countdownForm = TestUtils.renderIntoDocument(<CountdownInput onSetCountdown={spy}/>);
        var $el = $(ReactDOM.findDOMNode(countdownForm));

        // set input value
        countdownForm.refs.seconds.value = '109';

        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(109);
    });

    it('Should not call onSetCountdown if invalid seconds entered', () =>{
        var spy = expect.createSpy();
        var countdownForm = TestUtils.renderIntoDocument(<CountdownInput onSetCountdown={spy}/>);
        var $el = $(ReactDOM.findDOMNode(countdownForm));

        // set input value
        countdownForm.refs.seconds.value = '10nine';

        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });
});
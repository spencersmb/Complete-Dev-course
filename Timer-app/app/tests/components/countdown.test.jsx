import react from 'react';
const React = react;
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Countdown = require('Countdown');

describe('Countdown', () => {
   it('Should exist', () => {
       expect('Countdown').toExist();
   });
});

describe('onSetCountdown', () => {
   it('Should setState and countdown started', (done) => {
       var countdown = TestUtils.renderIntoDocument(<Countdown />);
        countdown.onSetCountdown(10);

       expect(countdown.state.totalSeconds).toBe(10);
       expect(countdown.state.countdownStatus).toBe("started");



       //wait 1 sec to check total seconds again
       setTimeout(() => {
           expect(countdown.state.totalSeconds).toBe(9);
           done(); //Async communicator to tell mocha the test is done
       },1001);
   });

    //test to make sure number isnt zero
    it('Should count to 0 and stop', (done) => {
        var countdown = TestUtils.renderIntoDocument(<Countdown />);
        countdown.onSetCountdown(1);

        //wait 1 sec to check total seconds again
        setTimeout(() => {
            expect(countdown.state.totalSeconds).toBe(0);
            done();
        },3001);
    });
});


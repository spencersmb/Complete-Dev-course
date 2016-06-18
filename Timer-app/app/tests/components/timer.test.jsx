import react from 'react';
const React = react;
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () => {
    it('Should exist', () => {
        expect('Timer').toExist();
    });
    it('Should start counting from 0 to 3 sec', (done) => {
        let timer = TestUtils.renderIntoDocument(<Timer />);

        expect(timer.state.totalSeconds).toBe(0);
        expect(timer.state.countdownStatus).toBe("stopped");

        timer.handleStatusChange("started");

        //wait 3 sec to check total seconds again
        setTimeout(() => {
            expect(timer.state.countdownStatus).toBe("started");
            expect(timer.state.totalSeconds).toBe(3);
            done();
        },3000);
    });
    it('Should pause after clicking started', (done) => {
        let timer = TestUtils.renderIntoDocument(<Timer />);

        expect(timer.state.totalSeconds).toBe(0);
        expect(timer.state.countdownStatus).toBe("stopped");

        timer.handleStatusChange("started");
        expect(timer.state.countdownStatus).toBe("started");

        timer.handleStatusChange("paused");
        setTimeout(() => {
            expect(timer.state.countdownStatus).toBe("paused");
            expect(timer.state.totalSeconds).toBe(0);
            done();
        },3001);


        
    });
});
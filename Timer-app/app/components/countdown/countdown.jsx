import react from 'react';
const React = react;
import Clock from 'Clock';
import CountdownInput from 'CountdownInput';

class Countdown extends React.Component {

    constructor(){
        super();

        this.state = {
            totalSeconds: 0,
            countdownStatus: 'stopped'
        };

        this.onSetCountdown = this.onSetCountdown.bind(this);
        this.startTimer = this.startTimer.bind(this);
    }
    componentDidUpdate(prevProps, prevState){
        //called after state or props are updated

        if(this.state.countdownStatus !== prevState.countdownStatus) {
            switch (this.state.countdownStatus){
                case 'started':

                    this.startTimer();
                    break;
            }
        }

        if(this.state.totalSeconds === 0){
            clearInterval(this.timer);
        }
    }
    startTimer(){
        //fire function every one second and set it on this.timer so we can access it later to stop it
        this.timer = setInterval(() => {
            console.log(this.state.totalSeconds);
            //new count changes the state
            var newCount = this.state.totalSeconds - 1;
            this.setState({
                totalSeconds: newCount >= 0 ? newCount : 0
            });


        }, 1000); // 1000 is 1 sec
    }
    onSetCountdown(seconds){
        this.setState({
            totalSeconds: seconds,
            countdownStatus: 'started'
        });
    }
    render(){
        let {totalSeconds} = this.state;
        return(
            <div>
                <Clock totalSeconds={totalSeconds}/>
                <CountdownInput onSetCountdown={this.onSetCountdown}/>
            </div>
        );
    }
}

module.exports = Countdown;
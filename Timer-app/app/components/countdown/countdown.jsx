import react from 'react';
const React = react;
import Clock from 'Clock';
import CountdownInput from 'CountdownInput';
import Controls from 'Controls';

class Countdown extends React.Component {

    constructor(){
        super();

        this.state = {
            totalSeconds: 0,
            countdownStatus: 'stopped'
        };

        this.onSetCountdown = this.onSetCountdown.bind(this);
        this.startTimer = this.startTimer.bind(this);
        this.handleStatusChange = this.handleStatusChange.bind(this);
    }
    componentWillMount(){
        // console.log('component will mount');
    }
    componentDidMount(){
        // console.log('component did mount');
    }
    componentWillUpdate(nextProps, nextState){
        // check just before an update happens
        // console.log('component will Update', nextProps, nextState);
    }
    componentDidUpdate(prevProps, prevState){
        //called after state or props are updated

        if(this.state.countdownStatus !== prevState.countdownStatus) {
            switch (this.state.countdownStatus){
                case 'started':

                    this.startTimer();
                    break;
                case 'stopped':
                    this.setState({
                        totalSeconds: 0
                    });
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
                case 'paused':

                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
            }
        }

    }
    componentWillUnmount(){
        console.log('countdown did UNmount');
        clearInterval(this.timer);
        this.timer=undefined;
    }
    startTimer(){
        //fire function every one second and set it on this.timer so we can access it later to stop it
        this.timer = setInterval(() => {
            // console.log(this.state.totalSeconds);
            //new count changes the state
            var newCount = this.state.totalSeconds - 1;
            this.setState({
                totalSeconds: newCount >= 0 ? newCount : 0
            });

            if(newCount === 0){
                this.setState({
                    countdownStatus: 'stopped'
                });
            }

        }, 1000); // 1000 is 1 sec
    }
    onSetCountdown(seconds){
        this.setState({
            totalSeconds: seconds,
            countdownStatus: 'started'
        });
    }
    handleStatusChange(newStatus){
        this.setState({
            countdownStatus: newStatus
        })
    }
    render(){
        let {totalSeconds, countdownStatus} = this.state;
        var renderCountdownArea = () => {
            if(countdownStatus != 'stopped'){
                return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}></Controls>;
            } else {
                return <CountdownInput onSetCountdown={this.onSetCountdown}/>;
            }
        };
        return(
            <div>
                <h1 className="page-title">Countdown App</h1>
                <Clock totalSeconds={totalSeconds}/>
                {renderCountdownArea()}
            </div>
        );
    }
}

module.exports = Countdown;
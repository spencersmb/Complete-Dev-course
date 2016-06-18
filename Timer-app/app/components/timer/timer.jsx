import react from 'react';
const React = react;

// import Components
import Clock from 'Clock';
import Controls from 'Controls';

class Timer extends React.Component {

    constructor(){
        super();

        this.state = {
            totalSeconds: 0,
            countdownStatus: 'stopped'
        };

        this.startTimer = this.startTimer.bind(this);
        this.handleStatusChange = this.handleStatusChange.bind(this);
    }
    componentWillUnmount(){
        console.log('Timer did UNmount');
        clearInterval(this.timer);
        this.timer=undefined;
    }
    componentDidUpdate(prevProps, prevState){
        //called after state or props are updated

        if(this.state.countdownStatus !== prevState.countdownStatus) {
            switch (this.state.countdownStatus){
                case 'started':
                    console.log('started case');
                    this.startTimer();
                    break;
                case 'stopped':
                    console.log('stopped case');
                    this.setState({
                        totalSeconds: 0
                    });
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
                case 'paused':
                    console.log('paused case');
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
            }
        }

    }

    startTimer () {
        
        this.timer = setInterval(()=>{
            
            // Count up by one second
            let newCount = this.state.totalSeconds + 1;

            // set state each update and make sure its a positive number
            this.setState({
                totalSeconds: newCount >= 0 ? newCount : 0
            });

            if( newCount === 600 ){
                this.setState({
                    countdownStatus: 'stopped'
                });
            }
        },1000);

    }

    handleStatusChange (newStatus) {
        this.setState({
            countdownStatus: newStatus
        })
    }

    onStatusChange() {

    }


    render(){
        let {totalSeconds, countdownStatus} = this.state;

        return(
            <div>
                <div>
                    <h1 className="page-title">Timer Component</h1>
                    <Clock totalSeconds={totalSeconds}/>
                    <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}></Controls>
                </div>
            </div>
        );
    }
}

module.exports = Timer;
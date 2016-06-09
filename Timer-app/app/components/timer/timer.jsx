import react from 'react';
const React = react;

// import Components
import Clock from 'Clock';

class Timer extends React.Component {
    render(){
        return(
            <div>
                <Clock />
                <div>Timer Component</div>
            </div>
        );
    }
}

module.exports = Timer;
import react from 'react';
const React = react;

class Controls extends React.Component {
    onStatusChange(newStatus){
        return () => {
            this.props.onStatusChange(newStatus);
        }
    }
    componentWillReceiveProps(newProps){
        //each time button clicked
    }
    render(){
        var {countdownStatus} = this.props;
        var renderStartStopButton = () => {
            if(countdownStatus === "started"){
                return <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>;
            } else {
                return <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>;
            }
        };

        return(
            <div className="controls">
                {renderStartStopButton()}
                <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
            </div>
        )
    }
}

Controls.PropTypes = {
   countdownStatus: React.PropTypes.string.isRequired,
    // onStatusChange: React.PropTypes.func.isRequired

};
module.exports = Controls;
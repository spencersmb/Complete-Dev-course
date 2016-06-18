import react from 'react';
const React = react;
const $ = jQuery;

class CountdownInput extends React.Component {
    constructor(){
        super();
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(event){
        event.preventDefault();
        let strSeconds = this.refs.seconds.value;

        console.log($('input').length);

        if( strSeconds.match(/^[0-9]*$/)) {
            this.props.onSetCountdown(parseInt(strSeconds, 10));
            this.refs.form.reset();
        }
    }
    render(){
        return(
            <div>
                <form onSubmit={this.onSubmit} ref="form">
                    <input type="text" ref="seconds" placeholder="Enter in your time"/>
                    <button className="button expanded" type="submit">Start</button>
                </form>
            </div>
        )
    }
}

module.exports = CountdownInput;
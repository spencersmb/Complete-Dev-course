var React = require('react');

var GreeterForm = React.createClass({
  submit: function (e) {
    e.preventDefault();

    var update = {};
    //ref to input
    var nameRef = this.refs.name;
    var name = nameRef.value;

    var messageRef = this.refs.message;
    var message = messageRef.value;

    // check to make sure you dont submit blank input
    if( typeof name === 'string' && name.length > 0){
      nameRef.value = '';
      update.namestate = name;
      //Pass name up to Greeter Root component
      // we do this by passing a function from Greeter Root to the Form
      // Data flows up first, then data flows down concept
    }

    if(typeof message === 'string' && message.length > 0){
        messageRef.value = '';
        update.messagestate = message;
    }

    this.props.onNewFormChange(update);

  },
  render: function () {
    return(
      <form onSubmit={this.submit}>
        <div>
          <input type="text" ref="name"></input>
        </div>
        <div>
          <textarea ref="message"></textarea>
        </div>
        <button>Submit</button>
      </form>
    );
  }
});

module.exports = GreeterForm;

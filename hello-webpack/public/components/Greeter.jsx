var React = require('react');
//File names root are setup using webpack aliases and root
var GreeterMessage = require('GreeterMessage');
var GreeterForm = require('GreeterForm');

var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      // Default name that be overridden
      name: 'React',
      message: 'Default Message'
    }
  },
  getInitialState: function () {
    return {
      namestate: this.props.name,
      messagestate: this.props.message
    };
  },
  handleNewForm: function (update) {
    //passing in an object so no need for brackets {}
    this.setState(update);
  },
  render: function () {
    var name = this.state.namestate;
    var message = this.state.messagestate;

    // We pass the function handleNewName DOWN to the Greeter Component, but the data flows up
    // Basically passing the function down it allows the sub component to have access to the function
    // Once a setState gets called - All components get reRenderd.
    return (
      <div>

        <GreeterMessage name={name} message={message}/>

        <GreeterForm onNewFormChange={this.handleNewForm} />

      </div>
    );
  }
});

module.exports = Greeter;

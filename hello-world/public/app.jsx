var data = "spencer"

var GreeterMessage = React.createClass({
  render: function () {
    var name = this.props.name;
    var message = this.props.message;
    return(
      <div>
        <h1>Hello {name}!</h1>
        <p>{message}</p>
      </div>
    );
  }
});

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

ReactDOM.render(
  // Greeter is always a wrapper or root component and is required for Best practice
  // This container does maintain state so the components inside are dummy
  // Root renders child components and is the water fall effect of data
  // Everytime Red update states - the children can update
  <Greeter name={data} message="Message from prop!"/>,
  document.getElementById('app')
);

import react from 'react';
const React = react;
import reactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
const ReactDOM = reactDOM;

class ErrorModal extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    // fires once immediately after inital rendering of the component
    var modalMarkup = (
      <div className="reveal tiny text-center" id="error-modal" data-reveal="">
        <h1>{this.props.title}</h1>
        <p className="lead">{this.props.errorMessage}</p>
        <button className="button hollow" data-close="" aria-label="Close reveal" type="button">
          Okay
        </button>
      </div>
    );

    var $modal = $(ReactDOMServer.renderToString(modalMarkup));
    console.log($(ReactDOM.findDOMNode(this)));
    $(ReactDOM.findDOMNode(this)).html($modal);

    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  }
  render() {
    return (
      <div></div>
    );
  }
}

ErrorModal.defaultProps = {
  title: 'Error'
};
module.exports = ErrorModal;

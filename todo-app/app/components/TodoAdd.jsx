var React = require('react');
var ReactDOM = require('react-dom');


class TodoAdd extends React.Component {

  constructor(){
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e){
    e.preventDefault();

    // Get input value
    let strTodo = this.refs.todoInput.value;

    if( typeof strTodo === "string" && strTodo.length > 0 ) {
      
      // call function passed into props of this component
      this.props.addTodo(strTodo);
      this.refs.form.reset();
      
    }

  }
  render(){

    return(
        <div>
          <form onSubmit={this.onSubmit} ref="form">
            <input type="text" ref="todoInput" placeholder="Add a todo"/>
            <button className="button expanded" type="submit">Add Item</button>
          </form>
        </div>
    )
  }
}
module.exports = TodoAdd;
var React = require('react');
var ReactDOM = require('react-dom');


class TodoSearch extends React.Component {

  constructor(){
    super();
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(){
    // Get checkbox value first
    let showCompleted = this.refs.showCompleted.checked;
    let searchText = this.refs.searchText.value;

    // Pass values up to TodoList
    this.props.onSearch(showCompleted, searchText);

  }

  render(){

    return(
        <div>
            <div><input id="search" type="text" ref="searchText" placeholder="Find a todo" onChange={this.handleSearch}/></div>
            <div>
              <label>
                <input type="checkbox" ref="showCompleted" onChange={this.handleSearch}/><span>Show Completed Todos</span>
              </label>
            </div>
        </div>
    )
  }
}
module.exports = TodoSearch;
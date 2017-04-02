var React = require('react');
var ReactDOM = require('react-dom');
import {connect} from 'react-redux';
import * as actions from 'actions';

export class TodoSearch extends React.Component {

  constructor(){
    super();
    this.handleSearch = this.handleSearch.bind(this);
    this.handleCompleted = this.handleCompleted.bind(this);
  }

  handleSearch(){
    // Get checkbox value first
    let searchText = this.refs.searchText.value;

    // Pass values up to TodoList
    // this.props.onSearch(showCompleted, searchText);
    
    //replace with dispatch..
    this.props.dispatch(actions.setSearchText(searchText));

  }

  handleCompleted(){
    // let showCompleted = this.refs.showCompleted.checked;
    this.props.dispatch(actions.toggleShowCompleted());
  }

  render(){

    let { dispatch, showCompleted, searchText } = this.props;

    //Set SearchText to what is in the Redux Store
    // show completed toggles is based on the showCompleted Boolean inside the store

    return(
        <div>
            <div><input id="search" type="text" ref="searchText" placeholder="Find a todo" value={ searchText } onChange={this.handleSearch}/></div>
            <div>
              <label>
                <input type="checkbox" ref="showCompleted" checked={showCompleted} onChange={this.handleCompleted}/><span>Show Completed Todos</span>
              </label>
            </div>
        </div>
    )
  }
}


// module.exports = TodoSearch;
// module.exports = connect()(TodoSearch);
// Get props from Store State
// Only returning the values we want from the state in this component
export default connect(
  (state) => {
    return {
      showCompleted: state.showCompleted,
      searchText: state.searchText
    }
  }
)(TodoSearch);
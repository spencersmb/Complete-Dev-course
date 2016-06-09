import react from 'react';
const React = react;
import {Link, IndexLink} from 'react-router';
// Use IndexLink on the item that is using IndexLink in the router so active class gets put on the correct item

class Navigation extends React.Component {
  constructor(){
    super();
    this.onSearch = this.onSearch.bind(this);
  }
  onSearch(e){
    e.preventDefault();
    let location = this.refs.search.value;
    let encodedLocation = encodeURIComponent(location);

    //check if location valid
    if(location.length > 0){
      this.refs.search.value = '';
      window.location.hash = '#/?location=' + encodedLocation;
      // right now the component doesnt know to update weather.jsx so we have to call component will recieve props in weather
    }
  }
  render() {
    return (
      <nav className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather App</li>
            <li><IndexLink to="/" activeClassName="active">Get Weather</IndexLink></li>
            <li><Link to="/about" activeClassName="active">About</Link></li>
            <li><Link to="/examples" activeClassName="active">Examples</Link></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li><input type="search" placeholder="search" ref="search"/></li>
              <li><input type="submit" className="button" value="Get Weather"/></li>
            </ul>
          </form>
        </div>
      </nav>
    );
  }
}
module.exports = Navigation;


module.exports = Navigation;
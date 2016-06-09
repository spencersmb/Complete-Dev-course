import react from 'react';
const React = react;
import {Link, IndexLink} from 'react-router';

let Nav = (props) => {
    return (
        <nav className="top-bar">

            <div className="top-bar-left">
                <ul className="menu">
                    <li className="menu-text">React Timer App</li>
                    <li><IndexLink to="/" activeClassName="active">Timer</IndexLink></li>
                    <li><Link to="/countdown" activeClassName="active">Countdown</Link></li>
                </ul>
            </div>
            <div className="top-bar-right">
                <ul className="menu">
                    <li className="menu-text">Created by <a href="#">Spencer</a></li>
                </ul>
            </div>
            
        </nav>
    );
};

module.exports = Nav;
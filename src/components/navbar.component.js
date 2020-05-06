import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '.././index.css'


export default class Navbar extends Component {

  render() {
    return (
      <header>
        <div className="container">
          <nav className="headerNav">
            <ul className="headerUl">
              <li>
                <Link to="/" className="headerNavLinkGray">Pokedex</Link>
              </li>
              <li>
                <Link to="/create" className="headerNavLinkRed">Create Pokemon</Link>
              </li>
              <li>
                <Link to="/" className="headerNavLinkBlue">About</Link>
              </li>
              <li>
                <a href="https://evanswitzer.ca" target="_blank" className="headerNavLinkGreen">My Website</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>


    /*  <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Pokemon Maker</Link>
        <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Pokedex</Link>
          </li>
          <li className="navbar-tem">
          <Link to="/create" className="nav-link">Create Pokemon</Link>
          </li>
        </ul>
        </div>
      </nav>*/
    );
  }

}

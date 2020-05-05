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
              <li className="headerNavli">
              <Link to="/" className="headerNavLink">Pokedex</Link>
              </li>
              <li className="headerNavli">
              <Link to="/create" className="headerNavLink">Create Pokemon</Link>
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

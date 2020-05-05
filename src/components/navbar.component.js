import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
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
      </nav>
    );
  }

}

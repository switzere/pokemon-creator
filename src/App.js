import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./components/navbar.component";
import PokemonList from "./components/pokemon-list.component";
import EditPokemon from "./components/edit-pokemon.component";
import CreatePokemon from "./components/create-pokemon.component";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Navbar />
          <br/>
          <Route path="/" exact component={PokemonList} />
          <Route path="/edit/:id" component={EditPokemon} />
          <Route path="/create" component={CreatePokemon} />
        </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import pikachu from '../img/pikachu.jpg';


/*const Pokemon = props => (
  <tr>
    <td>{props.pokemon.name}</td>
    <td>{props.pokemon.num}</td>
    <td>{props.pokemon.height}</td>
    <td>{props.pokemon.weight}</td>
    <td>{props.pokemon.category}</td>
    <td>{props.pokemon.ability}</td>
    <td>
      <Link to={"/edit/"+props.pokemon._id}>edit</Link> | <a href="#" onClick={() => { props.deletePokemon(props.pokemon._id) }}>delete</a>
    </td>
  </tr>
)*/

const Pokemon = props => (
  <div className="pokemonContainer">
    <img className="pokemonImg" src={pikachu} alt="pikachu"/>
    <p>#{props.pokemon.num}</p>
    <p>{props.pokemon.name}</p>
  </div>
)




export default class PokemonList extends Component {
  constructor(props) {
    super(props);

    this.deletePokemon = this.deletePokemon.bind(this);

    this.state = {pokemon: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/pokemon/')
      .then(response => {
        this.setState({ pokemon: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deletePokemon(id) {
    axios.delete('http://localhost:5000/pokemon/'+id)
      .then(res => console.log(res.data));
    this.setState({
      pokemon: this.state.pokemon.filter(el => el._id !== id)
    })
  }

  pokemonList() {
    return this.state.pokemon.map(currentpokemon => {
      return <Pokemon pokemon={currentpokemon} deletePokemon={this.deletePokemon} key={currentpokemon._id}/>;
    })
  }



    render() {
      return (
        <div className="whiteContainer">
          <div className="listContainer">
            <h3 className="title">Pokedex</h3>
            <ul>
                { this.pokemonList() }
            </ul>
          </div>
        </div>
      )
    }
  }

/*
  render() {
    return (
      <div className="tableContainer">
        <h3 className="title">Pokedex</h3>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Num</th>
              <th>Height</th>
              <th>Weight</th>
              <th>Category</th>
              <th>Ability</th>
            </tr>
          </thead>
          <tbody>
            { this.pokemonList() }
          </tbody>
        </table>
      </div>
    )
  }
}*/

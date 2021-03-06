import React, { Component } from 'react';
import axios from 'axios';


export default class CreatePokemon extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeNum = this.onChangeNum.bind(this);
    this.onChangeHeight = this.onChangeHeight.bind(this);
    this.onChangeWeight = this.onChangeWeight.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangeAbility = this.onChangeAbility.bind(this);
    this.onSubmit = this.onSubmit.bind(this);


    this.state = {
      name: '',
      num: 0,
      height: '',
      weight: '',
      category: '',
      ability: ''
    }
  }

  componentDidMount() {
    /*axios.get('http://localhost:5000/users/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.username),
            username: response.data[0].username
          })
        }
      })*/
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeNum(e) {
    this.setState({
      num: e.target.value
    });
  }

  onChangeHeight(e) {
    this.setState({
      height: e.target.value
    });
  }

  onChangeWeight(e) {
    this.setState({
      weight: e.target.value
    });
  }

  onChangeCategory(e) {
    this.setState({
      category: e.target.value
    });
  }

  onChangeAbility(e) {
    this.setState({
      ability: e.target.value
    });
  }



  onSubmit(e) {
    e.preventDefault();

    const pokemon = {
      name: this.state.name,
      num: this.state.num,
      height: this.state.height,
      weight: this.state.weight,
      category: this.state.category,
      ability: this.state.ability
    }



    console.log(pokemon);

    axios.post('http://localhost:5000/pokemon/create', pokemon)
      .then(res => console.log(res.data))
      .catch(function(error) {
        console.log(error);
      });

    window.location = '/';
  }


  render() {
    return (
      <div>
        <h3>Create New Pokemon</h3>
        <form onSubmit={this.onSubmit}>
          <div className="create-form">
            <label>Name: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
            />
          </div>
          <div className="form-group">
            <label>Num: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.num}
              onChange={this.onChangeNum}
            />
          </div>
          <div className="form-group">
            <label>Height: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.height}
              onChange={this.onChangeHeight}
            />
          </div>
          <div className="form-group">
            <label>Weight: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.weight}
              onChange={this.onChangeWeight}
            />
          </div>
          <div className="form-group">
            <label>Category: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.category}
              onChange={this.onChangeCategory}
            />
          </div>
          <div className="form-group">
            <label>Ability: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.ability}
              onChange={this.onChangeAbility}
            />
          </div>

          <div className="form-group">
            <input type="submit" value="Create Pokemon" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}

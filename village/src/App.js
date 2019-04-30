import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import {Route, NavLink} from 'react-router-dom';
import Smurf from './components/Smurf';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }


  getItemById = id => {
    axios
      .get(`http://localhost:3333/${id}`)
      .then(res => this.setState({ activeItem: res.data }))
      .catch(err => console.log(err));
  };

  componentDidMount() {
    axios
    .get ('http://localhost:3333/smurfs')
    .then (res => {
      this.setState({smurfs: res.data});
      console.log(res);
      console.log(this.state.smurfs)
    })
    .catch(error => {
      console.log(error);
    })
  }


  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <div className = "header">
          <NavLink exact to ="/"><button className = "Heading">HOME</button></NavLink>
          <NavLink exact to="/new-smurf"><button className="newSmurf">NEW</button></NavLink>
        </div>
        <Route path="/new-smurf" render ={props => <SmurfForm smurfs = {this.state.smurfs}/>} />
        <Route exact path="/" render={props => <Smurfs {...props} smurfs={this.state.smurfs} getItemById={this.getItemById} />}/>
      </div>
    );
  }
}

export default App;



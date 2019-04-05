import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import {Route} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

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
        <Route path="/new-smurf" render ={props => <SmurfForm smurfs = {this.state.smurfs}/>} />
        <Route exact path="/" render={props => <Smurfs smurfs={this.state.smurfs} />}/>
      </div>
    );
  }
}

export default App;


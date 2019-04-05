import React, { Component } from 'react';

import Smurf from './Smurf';
import './smurf.css';
import {Route} from 'react-router-dom';

class Smurfs extends Component {
  constructor(props) {
    super(props)
  }

  routeToSmurf = (e, smurf) => {
    e.preventDefault();
    this.props.history.push(`/${smurf.id}`);
    this.props.getItemById(smurf.id)
  }

  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <div onClick ={e => this.routeToSmurf(e, smurf)}
                className="selectedSmurf" key={smurf.id}>
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
              <Route exact path="/:id" render={props => (<Smurf {...props}
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}/>)}/>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;

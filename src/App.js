import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TableComponent from './tableComponent';
import OutputComponent from './outputComponent';
import './parseData'

class App extends Component {

state = {
  matrix: []
}

  handleTruthToggle = (newMatrix) => {
    this.setState({newMatrix})
  }

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <TableComponent handleTruthToggle={this.handleTruthToggle}/>
        <OutputComponent matrix={this.matrix}/>
      </div>
    );
  }
}

export default App;

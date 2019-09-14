import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TableComponent from './tableComponent';
import OutputComponent from './outputComponent';

class App extends Component {

state = {
  truthTable: []
}

  handleTruthToggle = (newTruthTable) => {
    this.setState({newTruthTable})
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
        <OutputComponent truthTable={this.truthTable}/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TableComponent from './tableComponent';
import OutputComponent from './outputComponent';
import { fetchUsers, fetchCampaigns, fetchMatrix } from './parseData'

class App extends Component {

state = {
  matrix: fetchMatrix(),
  campaign: fetchCampaigns(),
  users: fetchUsers()
}

handleTruthToggle = (rowIndex, colIndex) => {
  const { matrix } = this.state;
  if (this.state.matrix[rowIndex][colIndex] == 1) {
    matrix[rowIndex][colIndex] = 0;
  } else {
    matrix[rowIndex][colIndex] = 1;
  }
  this.setState(matrix);
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
        <TableComponent handleTruthToggle={this.handleTruthToggle} matrix={this.state.matrix} campaign={this.state.campaign} people={this.state.people}/>
        <OutputComponent matrix={this.state.matrix} campaign={this.state.campaign} people={this.state.people}/>
      </div>
    );
  }
}

export default App;

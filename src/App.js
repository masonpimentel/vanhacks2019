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
  switch (this.state.matrix[rowIndex][colIndex]) {
    case 0:
      matrix[rowIndex][colIndex] = 1;
      break
    case 1:
      matrix[rowIndex][colIndex] = null;
      break
    default:
      matrix[rowIndex][colIndex] = 0;
      break
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
        <TableComponent handleTruthToggle={this.handleTruthToggle} {...this.state}/>
        <OutputComponent {...this.state}/>
      </div>
    );
  }
}

export default App;

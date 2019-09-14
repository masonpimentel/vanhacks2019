import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TableComponent from './tableComponent';
import OutputComponent from './outputComponent';
// import jsonParser from './jsonParser.js';
import data from './mock_data_1.json'


class App extends Component {
  render() {
    console.log(data)
    var matrix = []

    // for (let i = 0; i < data.length; i++) {
    //   console.log(data[i].email)
    // }
  
    for (let i = 0; i < data.length; i++) {
      matrix[i] = [];
      for(var j=0; j<9; j++) {
          matrix[i][j] = data.email;
      }
    }

    // for (var property1 in data) {
    //   console.log(data[property1]);
    // }

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <TableComponent/>
        <OutputComponent/>
      </div>
    );
  }
}

export default App;

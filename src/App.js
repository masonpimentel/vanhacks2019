import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TableComponent from './tableComponent';
import OutputComponent from './outputComponent';
import './parseData'

class App extends Component {
  render() {

    return (
      <div className="App">
        <TableComponent/>
        <OutputComponent/>
      </div>
    );
  }
}

export default App;

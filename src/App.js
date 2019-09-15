import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TableComponent from './tableComponent';
import OutputComponent from './outputComponent';
import { fetchUsers, fetchCampaigns, fetchMatrix } from './parseData'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

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
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
            {' Donadar'}
            </Navbar.Brand>
          </Navbar>
            <Container>
              <Row>
                <Col>
                <TableComponent handleTruthToggle={this.handleTruthToggle} {...this.state}/>
                </Col>
                </Row>
                <Row>
                <Col>
                <OutputComponent {...this.state}/>
                </Col>
                </Row>
            </Container>
      </div>
    );
  }
}

export default App;

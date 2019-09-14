import React, { Component } from 'react';
import './tableComponent.css';
class TableComponent extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
      }
    
      handleChange() {
          // TODO figure out arguments (single value or entire table?)
          console.log("handleChange()");
          this.props.handleTruthToggle();
      }

      render() {
        const truthTable = this.props.truthTable;
        return (
        <div className="TableComponent">
            <div className="TC-header">
                <h2>Table Component</h2>
                <button onClick={this.handleChange}>Click me!</button>
            </div>
        </div>
        );
    }
}

export default TableComponent
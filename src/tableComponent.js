import React, { Component } from 'react';
import './tableComponent.css';
class TableComponent extends Component {
    
      handleChange = () => {
          // TODO figure out arguments (single value or entire table?)
          console.log("handleChange()");
          this.props.handleTruthToggle();
      }

      render() {
        const matrix = this.props.matrix;
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
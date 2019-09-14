import React, { Component } from 'react';
import './outputComponent.css';

class OutputComponent extends Component {
    render() {
        const truthTable = this.props.truthTable;
        // TODO: Call match function with truthTable
        return (
        <div className="OutputComponent">
            <div className="Output-header">
                <h2>Output Component</h2>
            </div>
        </div>
        );
    }
}

export default OutputComponent
import React, { Component } from 'react';
import './outputComponent.css';

class OutputComponent extends Component {
    render() {
        const matrix = this.props.matrix;
        // TODO: Call match function with truthTable
        return (
        <div className="OutputComponent">
            <div className="Output-header">
                <h2>Output Component</h2>
                <h2>{matrix}</h2>
            </div>
        </div>
        );
    }
}

// const OutputComponent = ({ matrix2 }) => {
//     //console.log(matrix2);
//     testing("asd");
//     return (
//     <div className="OutputComponent">
//         <div className="Output-header">
//             <h2>Output Component</h2>
//             <h2>{matrix2}</h2>
//         </div>
//     </div>
//     );
// };

export default OutputComponent
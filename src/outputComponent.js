import React, { Component } from 'react';
import './outputComponent.css';

function testing(someContent)  {
    console.log(someContent);
}

class OutputComponent extends Component {
    render() {
        const MATRIX = this.props.matrix_data;
        const USERS = this.props.user_data;
        const CAMPAIGNS = this.props.campaign_data;
        
        // TODO: Call match function with truthTable
        function campaignToFocus()  {
            // returns an index
            return 2;
        }
        function getPotentialDonors()   {
            var potentials = [];
            for(let i = 0; i < USERS.length; i++)   {
                if(MATRIX[i][campaignToFocus()] == 0)    {
                    potentials.push(i);
                }
            }
            return potentials;
        }
        function isSimilar(targetIdx, referenceIdx) {

        }



        let potentials = getPotentialDonors();
        return (
        <div className="OutputComponent">
            <div className="Output-header">
                <h2>Output Component</h2>
                <p>{MATRIX}</p>
                <p>{potentials}</p>
                <p>{CAMPAIGNS}</p>
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
import React, { Component } from 'react';
import './outputComponent.css';

class OutputComponent extends Component {
    res = [
        {
            "email": "user1@d.com",
            "probability": .45
        },
        {
            "email": "user2@d.com",
            "probability": .32
        }
    ];

    campaignToFocus = () => {
        return 2;
    }

    getPotentialDonors = (campaignIdx, matrix) =>   {
        var potentials = [];
        matrix.forEach((donations, idx) => {
            if(donations[campaignIdx] == null) {
                potentials.push(idx);
            }
        });
        return potentials;
    }
    buildMatrix = (matrix) => {
        // for debugging
        var data = []
        matrix.forEach((donations, index1) => {
            donations.forEach((value, index2) => {
                (value === null ? data.push("null") : data.push(value));
            });
        });
        return data;
    }

    howSimilar(targetIdx, referenceIdx, matrix) {
        var totalComparisons = 0; 
        var similarities = 0;
        matrix[targetIdx].forEach((cause, curIdx) => {
            let refCause = matrix[referenceIdx][curIdx];
            if( cause === null || refCause === null )   {
                // currently comparing for target campaign
                // either target or reference user has no data
                return;
            }
            if( cause === refCause )   {
                // both target and reference user donated or rejected
                similarities++;
            }
            // ignoring cases where not similar, increment totalComparison for weight
            totalComparisons++;
        });
        return {similarities, totalComparisons};
    }

    render() {
        const { matrix, campaign, users } = this.props;
        console.log(this.getPotentialDonors(1, matrix));

        const rows = this.res.map((el, i) =>
            <tr key={i}>
                <td>{el.email}</td>
                <td>{el.probability}</td>
            </tr>
        );

        return (
        <div className="OutputComponent">
            <div className="Output-header">
                <h2>Output Component</h2>
                <div>{this.buildMatrix(matrix)}</div>
            </div>
            <table>
                <tbody>
                {rows}
                </tbody>
            </table>
        </div>
        );
    }
}

export default OutputComponent;
        // TODO: Call match function with truthTable
//         function campaignToFocus()  {
//             // returns an index
//             return 2;
//         }
//         function getPotentialDonors()   {
//             var potentials = [];
//             for(let i = 0; i < USERS.length; i++)   {
//                 if(MATRIX[i][campaignToFocus()] == 0)    {
//                     potentials.push(i);
//                 }
//             }
//             return potentials;
//         }
//         function isSimilar(targetIdx, referenceIdx) {

//         }



//         let potentials = getPotentialDonors();
//         return (
//         <div className="OutputComponent">
//             <div className="Output-header">
//                 <h2>Output Component</h2>
//                 <p>{MATRIX}</p>
//                 <p>{potentials}</p>
//                 <p>{CAMPAIGNS}</p>
//             </div>
//         </div>
//         );
//     }
// }

// const OutputComponent = ({ matrix2 }) => {
//     //console.log(matrix2);
//     testing("asd");
import React, { Component } from 'react';
import './outputComponent.css';

function testing(someContent)  {
    console.log(someContent);
}

class OutputComponent extends Component {

    campaignToFocus = () => {
        return 2;
    }

    getPotentialDonors = (campaignIdx, matrix) =>   {
        var potentials = [];
        matrix.forEach((donations, idx) => {
            if(donations[campaignIdx] == 0) {
                potentials.push(idx);
            }
        });
        return potentials;
        // var potentials2 = function() {
        //     for (let [idx, donations] in matrix.entries())  {
        //         if(donations[campaignIdx] == 0)    {
        //             potentials.push(idx);
        //         }
        //     }
        // }
        // return potentials;
    }

    howSimilar(targetIdx, referenceIdx, campaignIdx, matrix) {
        // since referenceIdx must have donated, matrix[referenceIdx][campaignIdx] == 1
        // thus this always calculates how recommendable people[targetIdx] is according to [referenceIdx].
        var totalComparisons = 0; 
    }

    render() {
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
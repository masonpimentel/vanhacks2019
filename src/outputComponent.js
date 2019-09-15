import React, { Component } from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import './outputComponent.css';
import Table from "react-bootstrap/Table";

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

    getEmail = (index, identities) => {
        return identities[index];
    }

    getTargetCampaign = () => {
        return 2;
    }

    getBoolean = (data_matrix, userIdx, campaignIdx) => {
        if(data_matrix[userIdx][campaignIdx] === null)  {
            return null;
        }
        else if(data_matrix[userIdx][campaignIdx] === 0) {
            return false;
        }
        return true;
    } 
    getPotentialDonors = (campaignIdx, data_matrix) =>   {
        var potentials = [];
        data_matrix.forEach((donations, idx) => {
            if(donations[campaignIdx] == null) {
                potentials.push(idx);
            }
        });
        return potentials;
    }
    buildMatrix = (data_matrix) => {
        // for debugging
        var data = []
        data_matrix.forEach((donations, index1) => {
            donations.forEach((value, index2) => {
                (value === null ? data.push("null") : data.push(value));
            });
        });
        return data;
    }

    buildSimilarPair = (targetIdx, referenceDonations, data_matrix) => {
        var comparisons = 0; 
        var similarities = 0;
        data_matrix[targetIdx].forEach((cause, curIdx) => {
            let refCause = referenceDonations[curIdx];
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
            comparisons++;
        });
        return [similarities, comparisons];
    }

    findProbability = ( similarities, totalSimilarities ) => {
        return ((totalSimilarities == 0 || similarities == 0)? 0.00 : (similarities/totalSimilarities));
    }

    buildProbabilityArray = (data_matrix, identity_arr, campaign_arr) => {
        var targetCampaign = this.getTargetCampaign();
        var probabilityArr = {
            campaignIndex: targetCampaign,
            campaignName: campaign_arr[targetCampaign],
            recommendations: []
        };
        var totalSimilarities = 0;
        console.log(targetCampaign);
        this.getPotentialDonors(targetCampaign, data_matrix).forEach((targetIdx, potentialArrIdx) => {
            console.log("potentialDonors current index:" + targetIdx);
            var recommended_User = {
                identity: identity_arr[targetIdx],
                data: [],
                total_sims: 0,
                total_comps: 0,
                weighted_avg: 0.00
            };
            data_matrix.forEach((referenceDonor, referenceIdx) => {
                if(targetIdx == referenceIdx)   {
                    // reference == target user
                    return;
                }
                if(referenceDonor[targetCampaign] === null) {
                    // reference donor is also a potential recommendation
                    return;
                }
                var recommendation = this.buildSimilarPair(targetIdx, referenceDonor, data_matrix);
                totalSimilarities += recommendation[1];
                var probability = this.findProbability(recommendation[0], recommendation[1]);
                var referenceChoice = this.getBoolean(data_matrix, referenceIdx, targetCampaign);
                recommended_User.data.push({
                    likelyTo: referenceChoice,
                    chance: probability,
                    accordingTo: identity_arr[referenceIdx],
                    similarities: recommendation[0],
                    comparisons: recommendation[1]
                });
            });
            var average_value = 0;
            var total_similarities = 0;
            var total_comparisons = 0;
            recommended_User.data.forEach((user_data, index) => {
                if(user_data.likelyTo == false) {
                    average_value += (1.0 - user_data.chance);
                }
                else    {
                    average_value += user_data.chance;
                }
                total_similarities += user_data.similarities;
                total_comparisons += user_data.comparisons;
            });
            recommended_User.total_sims = total_similarities;
            recommended_User.total_comps = total_comparisons;
            recommended_User.weighted_avg = this.findProbability(average_value, total_similarities);
            probabilityArr.recommendations.push(recommended_User);
        });
        return probabilityArr;
    }

    render() {
        const { matrix, campaign, users } = this.props;
        console.log(this.getPotentialDonors(1, matrix));
        console.log(this.buildProbabilityArray(matrix,users,campaign))
        const rows = this.res.map((el, i) =>
            <tr key={i}>
                <td>{el.email}</td>
                <td>{el.probability}</td>
            </tr>
        );
        
        const dropdown = <DropdownButton id="dropdown-basic-button" title="Campaigns">
            {campaign.map((campaign) => <Dropdown.Item value={campaign}>{campaign}</Dropdown.Item>)}
        </DropdownButton>

        return (
        <div className="OutputComponent">
            <div className="Output-header">
                {/* <h2>Campaign {this.campaignToFocus()}</h2> */}
                {/*<div>{this.buildMatrix(matrix)}</div>*/}
            </div>
            <div>{dropdown}</div>
            <Table responsive striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Person</th>
                        <th>Percentage</th>
                    </tr>
                </thead>
                <tbody>
                {rows}
                </tbody>
            </Table>
        </div>
        );
    }
}

export default OutputComponent;

        // console.log(this.buildProbabilityArray(matrix, users, campaign));
        // console.log(JSON.stringify(this.buildProbabilityArray(matrix, users, campaign)));
        // return (
        // <div className="OutputComponent">
        //     <div className="Output-header">
        //         <h2>Output Component</h2>
        //         <div>{this.buildMatrix(matrix)}</div>
        //         <div></div>


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
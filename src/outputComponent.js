import React, { Component } from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import './outputComponent.css';
import Table from "react-bootstrap/Table";

class OutputComponent extends Component {
    getTargetCampaign = () => {
        console.log("got : " + this.props.targetCampaign);
        return this.props.targetCampaign;
    };

    setTargetCampaign = (e) => {
        let tCampaign = e.target.getAttribute("value");
        for(let i = 0; i < this.props.campaign.length; i++) {
            if (this.props.campaign[i] == tCampaign) {
                this.props.handleTargetCampaign(i);
                break;
            }
        }
    };

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

        if (targetCampaign < 0) {
            return [];
        }

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
                probability_sum: 0.00,
                probability_avg: 0.00,
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
            var sum_chance = 0.00;
            var average_value = 0.00;
            var total_similarities = 0;
            var total_comparisons = 0;
            recommended_User.data.forEach((user_data, index) => {
                if(user_data.likelyTo == false) {
                    sum_chance += (1.0 - user_data.chance);
                }
                else    {
                    sum_chance += user_data.chance;
                }
                total_similarities += user_data.similarities;
                total_comparisons += user_data.comparisons;
            });
            average_value = this.findProbability(sum_chance, total_similarities);
            recommended_User.total_sims = total_similarities;
            recommended_User.total_comps = total_comparisons;
            recommended_User.probability_sum = sum_chance;
            recommended_User.probability_avg = average_value;
            recommended_User.weighted_avg = average_value;
            probabilityArr.recommendations.push(recommended_User);
        });
        return probabilityArr;
    };

    buildHeader(targetCampaign) {
        if (targetCampaign > 0) {
            return (
                <h2>Campaign {targetCampaign+1}</h2>
            )
        }
    }

    buildRows(matrix, users, campaign) {
        let rowData = this.buildProbabilityArray(matrix, users, campaign).recommendations;

        if (!rowData || rowData.length == 0) {
            return;
        }

        return rowData.map((el, i) =>
            <tr key={i}>
                <td>{el.identity}</td>
                <td>{(el.weighted_avg.toFixed(2) * 100) + "%"}</td>
            </tr>
        );
    }

    render() {
        const { matrix, campaign, users } = this.props;
        
        const dropdown = <DropdownButton onClick={this.setTargetCampaign} id="dropdown-basic-button" title="Campaigns">
            {campaign.map((campaign) => <Dropdown.Item value={campaign}>{campaign}</Dropdown.Item>)}
        </DropdownButton>

        return (
        <div className="OutputComponent">
            <div>{dropdown}</div>
            <div className="Output-header">
                {this.buildHeader(this.getTargetCampaign())}
                {/* <h2>Campaign {this.campaignToFocus()}</h2> */}
            </div>
            <Table responsive striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Person</th>
                        <th>Percentage</th>
                    </tr>
                </thead>
                <tbody>
                {this.buildRows(matrix, users, campaign)}
                </tbody>
            </Table>
        </div>
        );
    }
}

export default OutputComponent;
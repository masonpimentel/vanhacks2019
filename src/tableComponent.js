import React, { Component } from 'react';
import './tableComponent.css';

class TableComponent extends Component {
    createCampaignRow = (campaign) => {
        let campaignRow = campaign.map(value => <th>{value}</th>)
        campaignRow.splice(0, 0, <th></th>);
        return campaignRow
    }

    createMatrixRow = (index, matrix, users) => {
        var htmlTable = [<th>{users[index]}</th>];

        matrix[index].forEach((data, columnIndex) => {
            if (data === 1) {
                htmlTable.push(<td><input id={index + ' ' + columnIndex} onClick={(e) => this.handleChange(e, data)} type='checkbox' checked/>{data}</td>);
            } else {
                htmlTable.push(<td><input id={index + ' ' + columnIndex} onClick={(e) => this.handleChange(e, data)} type='checkbox' unchecked/>{data}</td>);
            }
        });
        return htmlTable
    }

    handleChange = (e, data) => {
        var rowIndex = e.target.id.split(' ')[0];
        var colIndex = e.target.id.split(' ')[1];
        this.props.handleTruthToggle(rowIndex, colIndex);
    }

    render() {
        const { matrix, campaign, users} = this.props;

        return (
        <div className="TableComponent">
            <div className="TC-header">
                <h2>Table Component</h2>
                <table>
                    <thead>
                        <tr>{this.createCampaignRow(campaign)}</tr>
                    </thead>
                    <tbody>
                        {matrix.map((value, index) => <tr>{this.createMatrixRow(index, matrix, users)}</tr>)}
                    </tbody>
                </table>
            </div>
        </div>
        );
    }
}

export default TableComponent;
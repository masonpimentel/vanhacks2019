import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form'
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
                window.console.log("IF 1 Data = " + data + " index = " + index + " " + columnIndex);
                htmlTable.push(<td><Form.Check id={index + ' ' + columnIndex} onChange={(e) => this.handleChange(e, data, matrix)} type='checkbox' checked/>{data}</td>);
            } else {
                window.console.log("ELSE Data = " + data + " index = " + index + " " + columnIndex);
                htmlTable.push(<td><Form.Check id={index + ' ' + columnIndex} onChange={(e) => this.handleChange(e, data, matrix)} type='checkbox'/> {data === 0 ? 0 : 'null'}</td>);
            }
        });
        return htmlTable;
    }

    handleChange = (e, data, matrix) => {
        var rowIndex = e.target.id.split(' ')[0];
        var colIndex = e.target.id.split(' ')[1];
        this.props.handleTruthToggle(rowIndex, colIndex, matrix);
    }

    render() {
        const { matrix, campaign, users} = this.props;

        return (
        <div className="TableComponent">
                <h2>Table Component</h2>
                <Table responsive striped bordered hover size="sm">
                    <thead>
                        <tr>{this.createCampaignRow(campaign)}</tr>
                    </thead>
                    <tbody>
                        {matrix.map((value, index) => <tr>{this.createMatrixRow(index, matrix, users)}</tr>)}
                    </tbody>
                </Table>
        </div>
        );
    }
}

export default TableComponent;
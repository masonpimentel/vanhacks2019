import React, { Component } from 'react';
import './tableComponent.css';

class TableComponent extends Component {
    
    state = {
        data: [
            [ 0, 0, 1 ],
            [ 0, 1, 0 ],
            [ 1, 1, 1 ],
        ],
        campaign: [" ", "vic", "vic's ankles", "vic's lungs" ],
        people: [ "brian", "elliot", "mason" ],
    };


    handleChange = (e, data) => {
        var rowIndex = e.target.id.split(' ')[0];
        var colIndex = e.target.id.split(' ')[1];
        this.props.handleTruthToggle(rowIndex, colIndex);

    }

    createTableRow = (index, matrix, people, campaign) => {
        var people = people;
        var htmlTable = [<th>{people[index]}</th>];
        var tableData = matrix;
        tableData[index].forEach((data, columnIndex) => {
            if (data === 1) {
                htmlTable.push(<td><input id={index + ' ' + columnIndex} onClick={(e) => this.handleChange(e, data)} type='checkbox' checked/>{data}</td>);
            } else {
                htmlTable.push(<td><input id={index + ' ' + columnIndex} onClick={(e) => this.handleChange(e, data)} type='checkbox' unchecked/>{data}</td>);
            }
        });
        return htmlTable
    }

    render() {
        const { matrix, campaign, people } = this.props;
        console.log("PROPS" + this.props)
        console.log("matrix: " + matrix)
        console.log("Called render");
        let campaignRow = campaign.map(value => {
            return <th>{value}</th>
        });

        let dataRowAll = [];
        let dataRow = [];
        const getRow = (index) => {
            dataRow.push("<td>" + people[index] + "</td>");
        };
        for (let i = 0; i < people.length; i++) {
            dataRowAll.push(getRow(i));
        }
        return (
        <div className="TableComponent">
            <div className="TC-header">
                <h2>Table Component</h2>
                <button onClick={this.handleChange}>Click me!</button>
                <table><thead>
                    <tr>{campaignRow}</tr>
                </thead>
                <tbody>
                    {matrix.map((value, index) => {
                        return <tr>{this.createTableRow(index, matrix, people, campaign)}</tr>;
                    })}
                </tbody></table>
            </div>
        </div>
        );
    }
}

export default TableComponent;
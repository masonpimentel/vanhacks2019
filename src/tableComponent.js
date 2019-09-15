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

    handleChange = (data) => {
        // TODO figure out arguments (single value or entire table?)
        console.log("handleChange() + " + data);
        console.log("Data = " + this.state.data[1][1]);
        // this.props.handleTruthToggle();
    }

    createTableRow = (index) => {
        var people = this.state.people;
        var htmlTable = [<th>{people[index]}</th>];
        var tableData = this.state.data;
        tableData[index].forEach(data => {
            if (data === 1) {
                htmlTable.push(<td><input onClick={() => this.handleChange(data)} type='checkbox' checked/>{data}</td>);
            } else {
                htmlTable.push(<td><input onClick={() => this.handleChange(data)} type='checkbox' unchecked/>{data}</td>);
            }
        });
        return htmlTable
    }

    render() {
        console.log("Called render");
        const { data, campaign, people } = this.state;
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
                    {data.map((value, index) => {
                        return <tr>{this.createTableRow(index)}</tr>;
                    })}
                </tbody></table>
            </div>
        </div>
        );
    }
}

export default TableComponent;
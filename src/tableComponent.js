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

    handleChange = () => {
        // TODO figure out arguments (single value or entire table?)
        console.log("handleChange()");
        this.props.handleTruthToggle();
    }

    createTable = () => {
        var htmlTable = '<table>',
            tableData = this.state.data;
        htmlTable += '<tbody>';
        tableData.forEach(function(rowData) {
            htmlTable += '<tr>';
            rowData.forEach(function(cellData) {
              if (cellData == 1) {
                htmlTable += '<td><input type="checkbox"/></td>';
                htmlTable += '<td><input type="checkbox"/></td>';
                console.log(htmlTable);
              } else {
                htmlTable += '<td><input type="text"/></td>';
              }
          });
          htmlTable += '</tr>';
        });
        htmlTable += '</tbody></table>'
        return htmlTable; 
    }

    createTableRow = (index) => {
        var people = this.state.people;
        var htmlTable = [<th>{people[index]}</th>];
        var tableData = this.state.data;
        tableData[index].forEach(data => {
            htmlTable.push(<td><input type='checkbox'/>{data}</td>)
        });
        return htmlTable
    }

    render() {
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
                {[<p>sfjdfs</p>, <p>sdfdsaf</p>]}
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
import React, { Component } from 'react';
import { Markup } from 'interweave';
import './tableComponent.css';

class TableComponent extends Component {
    state = {
        data: [
            [ 0, 0, 1 ],
            [ 0, 1, 0 ],
            [ 1, 1, 1 ],
        ],
        campaign: [ "vic", "vic's ankles", "vic's lungs" ],
        people: [ "brian", "elliot", "mason" ],
    };

    createTable = () => {
        var htmlTable = '<table>',
            tableData = this.state.data;
        htmlTable += '<tbody>';
        tableData.forEach(function(rowData) {
            htmlTable += '<tr>';
            rowData.forEach(function(cellData) {
              if (cellData == 1) {
                htmlTable += '<td><input type="radio" value="' + cellData + '" checked></td>';
                console.log(htmlTable);
              } else {
                htmlTable += '<td><input type="radio" value="' + cellData + '" unchecked></td>';
              }
          });
          htmlTable += '</tr>';
        });
        htmlTable += '</tbody></table>'
        return htmlTable; 
       }

    // createTable = () => {
    //     console.log("document: " + document);
    //     return document.createElement("table");
    //     // let tableBody = document.createElement("tbody");
    // }

    render() {
        const { data, campaign, people } = this.state;
        let campaignRow = campaign.map(value => {
            return <th>{value}</th>
        })

        let dataRowAll = [];
        let dataRow = [];
        const getRow = (index) => {
            dataRow.push("<td>" + people[index] + "</td>")
        }
        for (let i = 0; i < people.length; i++) {
            dataRowAll.push(getRow(i));
        }
        
        
        return (
        <div className="TableComponent">
            <div className="TC-header">
                <h2>Table Component</h2>
                <tr>{campaignRow}</tr>
                <Markup content={this.createTable()}/>
            </div>
        </div>
        );
    }
}

export default TableComponent
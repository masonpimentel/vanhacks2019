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

    render() {


        const rows = this.res.map((el, i) =>
            <tr key={i}>
                <td>
                    {el.email}
                </td>
                <td>
                    {el.probability}
                </td>
            </tr>
        );

        return (
        <div className="OutputComponent">
            <div className="Output-header">
                <h2>Output Component</h2>
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

export default OutputComponent
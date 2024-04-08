import React, { Component } from 'react';
import Spreadsheet from 'react-spreadsheet';

export default class SpreadsheetWrapper extends Component {
    render() {
        const { data, cLabels, rLabels } = this.props;

        return (
            <Spreadsheet data={data} columnLabels={cLabels} rowLabels={rLabels}/>
        );
    }
}

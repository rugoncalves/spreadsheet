
import React from 'react';
import SpreadsheetWrapper from './components/SpreadsheetWrapper';

const data = [
    [{ value: "Vanilla" }, { value: "Chocolate" }],
    [{ value: "Strawberry" }, { value: "Cookies" }],
  ];

const columnLabels = ["Flavour", "Food"];
const rowLabels = ["Item 1", "Item 2"];

const App = () => {
    return (
        <div>
            <h1>React Spreadsheet Wrapper Example</h1>
            <SpreadsheetWrapper data={data} cLabels={columnLabels} rLabels={rowLabels}/>
        </div>
    );
};

export default App;

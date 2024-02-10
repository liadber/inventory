import React from 'react';
import "./App.scss";
import Section from "./components/section/Section";
import SelectableList from "./components/list/SelectableList";
import {GridColDef, GridRowsProp} from "@mui/x-data-grid";
import Table from "./components/table/Table";


function App() {

    const rows: GridRowsProp = [
        {id: 1, col1: 'Hello', col2: 'World'},
        {id: 2, col1: 'DataGridPro', col2: 'is Awesome'},
        {id: 3, col1: 'MUI', col2: 'is Amazing'}    ];
    const columns: GridColDef[] = [
        {
            field: 'col1',
            headerName: 'Column 1',
            width: 150,
            type: "singleSelect",
            valueOptions: ['United Kingdom', 'Spain', 'Brazil']
        },
        {field: 'col2', headerName: 'Column 2', width: 150},
    ];

    return (
        <>
            <Section>
                <SelectableList listItems={Array(150).fill("books (4)")}></SelectableList>
            </Section>
            <Section bigger={true}>
                <Table rows={rows} columns={columns}></Table>
            </Section>
        </>
    );
}

export default App;


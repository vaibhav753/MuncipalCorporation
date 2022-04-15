// src/components/filter.table.js
import React from "react";
import { useTable, useFilters, useGlobalFilter, useAsyncDebounce } from 'react-table'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

// Define a default UI for filtering
 function GlobalFilter({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter,
}) {
    const count = preGlobalFilteredRows.length
    const [value, setValue] = React.useState(globalFilter)
    const onChange = useAsyncDebounce(value => {
        setGlobalFilter(value || undefined)
    }, 200)

    return (
        <span>
            Search:{' '}
            <input
                className="form-control"
                value={value || ""}
                onChange={e => {
                    setValue(e.target.value);
                    onChange(e.target.value);
                }}
                placeholder={`${count} records...`}
            />
        </span>
    )
} 
function DefaultColumnFilter({
    column: { filterValue, preFilteredRows, setFilter },
}) {
    const count = preFilteredRows.length

    return (
        <input
            className="form-control"
            value={filterValue || ''}
            onChange={e => {
                setFilter(e.target.value || undefined)
            }}
            placeholder={`Search ${count} records...`}
        />
    )
}
function Table({ columns, data }) {
    const defaultColumn = React.useMemo(
        () => ({
           
            Filter: DefaultColumnFilter,
        }),
        []
    )
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
        preGlobalFilteredRows,
        setGlobalFilter,
    } = useTable(
        {
            columns,
            data,
            defaultColumn
        },
        useFilters,
        useGlobalFilter
    )
    return (
        <div>
            {<GlobalFilter
                preGlobalFilteredRows={preGlobalFilteredRows}
                globalFilter={state.globalFilter}
                setGlobalFilter={setGlobalFilter}
            />}
            <table className="table" {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>
                                    {column.render('Header')}
                                    {/* Render the columns filter UI */}
                                    <div>{column.canFilter ? column.render('Filter') : null}</div>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row, i) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <br />
            <div>Showing search result {rows.length} rows</div>
            <div>
                <pre>
                    <code>{JSON.stringify(state.filters, null, 2)}</code>
                </pre>
            </div>
        </div>
    )
}

function BirthVList() {
    const navigate = useNavigate();

    const [data, setData] = useState([]);
    const dataRef = useRef();
    dataRef.current = data;

    useEffect(() => {

        axios.get('http://localhost:8080/birthRegistration/vlist', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + sessionStorage.getItem("tokenId")
            },

        })
            .then((res) => {
                console.log('res ', res.data);
                setData(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);
    console.log('data', data);

    var data1 = data.map(x => ({
        id: x["id"],
        name: x["name"],
        dob: x["dob"],
    }))
    console.log('data1', data1);
    const GetDetails = (rowIndex) => {
        const id = dataRef.current[rowIndex];
        console.log(id["id"])

        navigate("/birthRegistration/birthDetails/" + id["id"])
    };
  

    const handleClickGroup = (e) => {
        console.log("button clicked ", e.target.value);
    }

    const columns = React.useMemo(
        () => [

            {
                Header: 'Birth Registration History Table',
                columns: [
                    {
                        Header: 'Id',
                        accessor: 'id',

                    },
                    {
                        Header: 'Name',
                        accessor: 'name'
                    },

                    {
                        Header: 'DOB',
                        accessor: 'dob'
                    },
                    {
                        Header: 'Action',
                        accessor: 'action',
                        Cell: (props) => {
                            const rowIdx = props.row.id;
                            return (
                                <div >
                                    <span >
                                        <button className="btn btn-info" onClick={() => GetDetails(rowIdx)}>
                                            Details
                                        </button>
                                    </span>
                                   
                                </div>
                            );
                        },

                    },
                ],
            },
        ],
        []
    )
    return (
        <Table columns={columns} data={data1} />
    )
}
export default BirthVList;
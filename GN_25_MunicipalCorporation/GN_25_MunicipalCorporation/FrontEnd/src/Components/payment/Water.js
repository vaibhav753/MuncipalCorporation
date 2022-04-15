import React, { useEffect, useState, useRef } from "react";
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useTable, useFilters, useGlobalFilter, useAsyncDebounce } from 'react-table'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import WaterService from "../../service/WaterService";
import { ReactSession } from 'react-client-session';
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
            // Default Filter UI
            Filter: DefaultColumnFilter,
        }),
        []
    )

    const navigate = useNavigate();
    const dataRef = useRef();
    dataRef.current = data;
    const { conId } = useParams();

    const updateWater = (consId) => {
        let dataArray = dataRef.current;
        console.log(dataArray);
        let regId = dataArray[0].consumerNo;
        console.log(regId);
        // WaterService.updateWaterRecords(consId)
        axios.put(`http://localhost:8080/water/${consId}`, null, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("tokenId")}`
            }
        })
            .then((res) => {
                console.log('res ', res.data);

            })
            .catch((err) => {
                console.error(err);
            });
        navigate("/water/" + consId);
    }

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
            <GlobalFilter
                preGlobalFilteredRows={preGlobalFilteredRows}
                globalFilter={state.globalFilter}
                setGlobalFilter={setGlobalFilter}
            />
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

                <p>Total amount : {totalAmount} (Rs. {totalAmount / 100})</p>

                <button className="btn btn-success" onClick={() => navigate("/payment_gateway/")}>
                    Pay
                </button>

            </table>
            <br />



        </div>
    )
}

var totalAmount = 0;

function Water() {

    const [data2, setData] = useState([]);
    const dataRef = useRef();
    dataRef.current = data2;
    const [waterList, setWaterData] = useState([]);
    const { conId } = useParams();
    console.log(waterList);

    useEffect(() => {
        console.log('params ', conId);
        // WaterService.getWaterRecords(conId)
        axios.get(`http://localhost:8080/water/${conId}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("tokenId")}`
            }
        })
            .then((response) => {
                console.log('res ', response.data);
                setWaterData(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    const columns = React.useMemo(
        () => [
            {
                Header: 'Payment History Table',
                columns: [
                    {
                        Header: 'Date',
                        accessor: 'date'
                    },
                    {
                        Header: 'Unit',
                        accessor: 'unit'
                    },
                    {
                        Header: 'Amount',
                        accessor: 'amount'
                    },
                    {
                        Header: 'Status',
                        accessor: 'status'
                    },
                ],
            },
        ],
        []
    )

    const data = waterList;
    console.log(data);

    totalAmount = 0;
    for (let ele in data) {
        console.log(data[ele].status);
        if (data[ele].status == "UNPAID") {
            totalAmount += data[ele].amount;
        }
    }
    console.log(totalAmount);
    ReactSession.set("totalAmount", totalAmount);

    return (
        <Table columns={columns} data={data} />
    )
}

export default Water;
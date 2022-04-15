import { useTable, useFilters, useGlobalFilter, useAsyncDebounce } from 'react-table'
import React, { useEffect, useState, useRef } from "react";
import { Link, useParams, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ReactSession } from 'react-client-session';
import axios from 'axios';
// import PropertyService from '../../service/PropertyService';


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

    const updateProp = (consId) => {
        let dataArray = dataRef.current[consId];
        console.log(dataArray);
        let regId = dataArray.consumerNo;
        console.log(regId);
        // PropertyService.updatePropertyRecords(consId)
        axios.put(`http://localhost:8080/property/${consId}`, null, {
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
        navigate("/property/" + consId);
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

function Property() {

    const [data2, setData] = useState([]);
    const dataRef = useRef();
    dataRef.current = data2;
    const [propertyList, setPropertyData] = useState([]);
    // const [conumerId, setConsumerId] = useState([]);
    const { conId } = useParams();
    console.log(propertyList);

    useEffect(() => {
        console.log('params ', conId);
        // PropertyService.getPropertyRecords(conId)
        axios.get(`http://localhost:8080/property/${conId}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("tokenId")}`
            }
        })
            .then((response) => {
                console.log('res ', response.data);
                setPropertyData(response.data);
            })
            .catch((err) => {
                console.error(err);
            });

            // axios.get(`http://localhost:8080/property/current/${sessionStorage.getItem("email")}`, {
            //     headers: {
            //         'Content-Type': 'application/json',
            //         'Authorization': `Bearer ${sessionStorage.getItem("tokenId")}`
            //     }
            // })
            //     .then((response) => {
            //         console.log('res ', response.data);
            //         setConsumerId(response.data);
            //         console.log(response.data);
            //     })
            //     .catch((err) => {
            //         console.error(err);
            //     });
        
    }, []);

    const columns = React.useMemo(
        () => [
            {
                Header: 'Payment History Table',
                columns: [
                    {
                        Header: 'Year',
                        accessor: 'year'
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

    const data = propertyList;
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

export default Property;
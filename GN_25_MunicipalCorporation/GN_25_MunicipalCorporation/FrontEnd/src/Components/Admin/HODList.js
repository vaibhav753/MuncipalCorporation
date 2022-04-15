
import React from "react";

import { useTable, useFilters, useGlobalFilter, useAsyncDebounce } from 'react-table'
// import complaintserv from "../../service/ComplaintService";
// import HODServices from "../../service/HODServices";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";



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



function HODList() {
    const navigate = useNavigate();

    const [data, setData] = useState([]);
    const dataRef = useRef();
    dataRef.current = data;
    const [newData, setNewData] = useState([]);
    // const newDataArr = 

 

     useEffect( () =>  {
        
        // HODServices.getHODDetails()
        axios.get(`http://localhost:8080/HODlist`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("tokenId")}`
            }
        })
            .then( (res) => {
                console.log('res ', res.data);
                // console.log("new",res.data[0].roles[0].userRole)


                setData(res.data)
            


            })
            .catch((err) => {
                console.error(err);
            });

            
            
            
    }, []);

    // const newArr = [];

    // const newFun = () => {
    //     for (let ele in data){
    //         if(data[ele].roles[0].userRole == "ROLE_HODCOMPLAINTS" || data[ele].roles[0].userRole == "ROLE_HODSERVICES"){
    //             // setNewData([...newData, data[ele]]);
    //             newArr.push(data[ele]);
    //         }
    //     }
    //     console.log("newwww", newArr)
    //     setNewData(newArr);
    // }


    // useEffect(() => {

    //     const fun1=async()=>{
    //         await axios.get(`http://localhost:8080/HODlist`, {
    //                     headers: {
    //                         'Content-Type': 'application/json',
    //                         'Authorization': `Bearer ${sessionStorage.getItem("tokenId")}`
    //                     }
    //                 })
    //                 .then((res)=>{
    //                     setData(res.data)
                        

    //                 })
    //     }



    //         },[] )


    var data1 = data.map(x => ({
        email: x[1],
        firstName: x[2],
        lastName: x[3]

    }))

    

    // const runFun = () => {
    //     
    //     console.log("abc", newData)
    // };



    const deleteHOD = (rowIndex) => {
        const id = dataRef.current[rowIndex];
        console.log(id);
        console.log(id[0])


        axios.delete(`http://localhost:8080/HODlist/${id[0]}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("tokenId")}`
            }
        })
            .then( (res) => {
                console.log('res ', res.data);
                // console.log("new",res.data[0].roles[0].userRole)


                // setData(res.data)
                window.location.reload();


            })
            .catch((err) => {
                console.error(err);
            });

        // HODServices.removeHOD(id[0]).then((res) => {
        //     console.log("res", res.data);
        //     window.location.reload();
        // })
        //     .catch((err) => {
        //         console.error(err);
        //     });

    }


    const handleClickGroup = (e) => {
        console.log("button clicked ", e.target.value);
    }

    const columns = React.useMemo(
        () => [

            {
                Header: 'Complaints History Table',
                columns: [
                    {
                        Header: 'Email',
                        accessor: 'email',

                    },
                    {
                        Header: 'FirstName',
                        accessor: 'firstName'
                    },

                    {
                        Header: 'LastName',
                        accessor: 'lastName'
                    },
                    {
                        Header: 'Action',
                        accessor: 'action',
                        Cell: (props) => {
                            const rowIdx = props.row.id;
                            return (
                                <div >

                                    &nbsp;

                                    <span>
                                        <button className="btn btn-danger" onClick={() => deleteHOD(rowIdx)}>
                                            Remove HOD
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

export default HODList;
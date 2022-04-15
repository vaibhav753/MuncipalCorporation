

import { useTable, useFilters, useGlobalFilter, useAsyncDebounce } from 'react-table'
// import ComplaintTypeService from "../../service/ComplaintTypeService";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';


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

    const [mainCType, setMainCType] = useState([]);
    const [mainComType, setMainComType] = useState([]);

    useEffect(() => {

        // ComplaintTypeService.getComplaintTypes()
        axios.get(`http://localhost:8080/addComplaint`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("tokenId")}`
            }
        })
            .then((res) => {
                console.log('res ', res.data);
                setMainCType(res.data);

            })
            .catch((err) => {
                console.error(err);
            });

        // ComplaintTypeService.getMainComplaint()
        axios.get(`http://localhost:8080/removeComplaint/main`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("tokenId")}`
            }
        })
            .then((res) => {
                console.log('res ', res.data);
                setMainComType(res.data);

            })
            .catch((err) => {
                console.error(err);
            });

        console.log("hello" + mainComType[0]);

    }, []);

    const [ddValue, setDDValue] = useState();

    const deleteMCT = (e) => {
        e.preventDefault();

        // if (ddValue == "") {
        //     alert("select a type!");
        //     return;
        // }

        //delete('removeComplaint/'+id)
        // ComplaintTypeService.deleteMainComplaintType(ddValue)
        axios.delete(`http://localhost:8080/removeComplaint/main/${ddValue}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("tokenId")}`
            }
        })
            .then((res) => {
                console.log("res", res.data);
                window.location.reload();
            })
            .catch((err) => {
                console.error(err);
            });
    }

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


            <div className="row justify-content-center ">

                <div className="row justify-content-center p-2 box-height">
                    {/* <NavigationBar></NavigationBar> */}
                    <br></br>
                    <div className="col-6 align-self-center shadow-lg" style={{ backgroundColor: '#ebf2fa' }}>
                        <div className="row justify-content-center p-2">

                            <h2 className='textStyleHeading'>Remove Main Complaint Type : </h2>

                            <form className="form-inline" >


                                <div className="mb-3 row justify-content-center">
                                    <label className="col-sm-3 col-form-label">Main Type</label>
                                    <div className="col-sm-8" >
                                        <select className="form-control" name="mType" id="mType" value={ddValue} onChange={(e) => setDDValue(e.target.value)} >
                                            <option value="">select from list</option>
                                            {mainComType.map((item) => {
                                                return <option value={item}>{item}</option>
                                            })}

                                        </select>
                                    </div>
                                </div>

                                <div className='wraper'>
                                    <input type="button" value="Remove" className='btn btn-primary btn-lg' id='submitbutton' onClick={(e) => deleteMCT(e)} />
                                </div>

                                {/* <p className="text-center mt-5 ">Have already an account? <a href="/login" className="fw-bold">Login here</a></p> */}
                            </form>
                        </div>
                    </div >
                </div >

            </div >




        </div>
    )
}




function ComplaintList() {
    const navigate = useNavigate();
    const [mainCType, setMainCType] = useState([]);
    const [data, setData] = useState([]);
    const dataRef = useRef();
    dataRef.current = data;

    useEffect(() => {


        // ComplaintTypeService.getComplaintList()
        axios.get(`http://localhost:8080/removeComplaint`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("tokenId")}`
            }
        })
            .then((res) => {
                console.log('res ', res.data);


                setData(res.data);

            })
            .catch((err) => {
                console.error(err);
            });




        // ComplaintTypeService.getComplaintTypes()
        axios.get(`http://localhost:8080/addComplaint`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("tokenId")}`
            }
        })
            .then((res) => {
                console.log('res ', res.data);
                setMainCType(res.data);

            })
            .catch((err) => {
                console.error(err);
            });

    }, []);

    console.log('data', data);

    var data1 = data.map(x => ({
        id: x.id,
        mainComplaint: x.mainType,
        subComplaint: x.subType

    }))


    const openTutorial = (rowIndex) => {
        const id = dataRef.current[rowIndex];

        console.log(id[0])

        navigate("/HODlist" + id[0])
    };




    const deleteSubComplaint = (rowIndex) => {
        const id = dataRef.current[rowIndex];

        console.log(id.id)

        // ComplaintTypeService.deleteComplaintSubType(id.id)
        axios.delete(`http://localhost:8080/removeComplaint/${id.id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("tokenId")}`
            }
        })
            .then((res) => {
                console.log('res ', res.data);
                window.location.reload();
            })
            .catch((err) => {
                console.error(err);
            });
    };


    const handleClickGroup = (e) => {
        console.log("button clicked ", e.target.value);
    }

    const columns = React.useMemo(
        () => [

            {
                Header: 'Complaints History Table',
                columns: [
                    {
                        Header: 'Id',
                        accessor: 'id',

                    },
                    {
                        Header: 'MainComplaint',
                        accessor: 'mainComplaint'
                    },

                    {
                        Header: 'SubComplaint',
                        accessor: 'subComplaint'
                    },
                    {
                        Header: 'Action',
                        accessor: 'action',
                        Cell: (props) => {
                            const rowIdx = props.row.id;
                            return (
                                <div >
                                    {/* <span >
                                <button className="btn btn-info" onClick={() => openTutorial(rowIdx)}>
                                HOD Details
                             </button>
                             </span> */}
                                    &nbsp;

                                    <span>
                                        <button className="btn btn-danger" onClick={() => deleteSubComplaint(rowIdx)}>
                                            Remove sub-complaint
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

export default ComplaintList;
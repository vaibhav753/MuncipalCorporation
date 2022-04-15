import "../../Addcss/Complaint.css";
import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const DeathDetails = () => {
    const [deathReg, setDeathReg] = useState({});
    const navigate = useNavigate();
    const Id = useParams();
    
    console.log("Id",Id.id);
    console.log(typeof(Id));
    useEffect(() => {
        axios.get('http://localhost:8080/deathRegistration/deathDetails/'+Id.id, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + sessionStorage.getItem("tokenId")
            },

        }).then((res) => {
            console.log("res", res.data);
            setDeathReg(res.data);
            console.log("success", deathReg);
        })
            .catch((err) => {
                console.error(err);
            });
    }, [])

    /* const onClickEvent = (e) => {
        e.preventDefault();
        navigate('/UVList')
    } */

    return (
        <div>
            <div className="row justify-content-center box-height">
                <div className="col-9 align-self-center shadow-lg" style={{ backgroundColor: '#ebf2fa' }}>
                    <div className="row justify-content-center p-2">
                        < h2 className="textStyleHeading">Death Registration Details</h2>
                    </div>
                    <form className="form-inline">
                        <div className="border border-2 p-1" >
                            <div className='row justify-content-center'>
                                <h3 className='p-2 rounded textStyle' id="heading">Deceased Details
                                </h3>
                            </div>
                            <div>
                                <div className="mb-3 row justify-content-center">
                                    <label className="col-sm-3 col-form-label" >
                                        Name :
                                    </label>
                                    <div className="col-sm-8">
                                        <input className="form-control" type="text" value={deathReg.name} readOnly />
                                    </div>
                                </div>

                                <div className="mb-3 row justify-content-center">
                                    <label className="col-sm-3 col-form-label">Gender:</label>
                                    <div className="col-sm-8">
                                        <input className="form-control" type="text"  value={deathReg.gender} readOnly />

                                    </div>
                                </div>


                                <div className="mb-3 row justify-content-center">
                                    <label className="col-sm-3 col-form-label">Date of Birth</label>
                                    <div className="col-sm-8">

                                        <input className="form-control" type="date" value={deathReg.dob} name="dob" readOnly />
                                    </div>
                                </div>
                                <div className="mb-3 row justify-content-center">
                                    <label className="col-sm-3 col-form-label">Date of Death</label>
                                    <div className="col-sm-8">

                                        <input className="form-control" type="date" value={deathReg.dod} name="dob" readOnly />
                                    </div>
                                </div>
                                <div className="mb-3 row justify-content-center">
                                    <label className="col-sm-3 col-form-label">Day</label>
                                    <div className="col-sm-8">
                                    <input className="form-control"  value={deathReg.day}  readOnly />
                                    </div>
                                </div>

                                <div className="mb-3 row justify-content-center ">
                                    <label className="col-sm-3 col-form-label">Time </label>
                                    <div className="col-sm-8">
                                        <input className="form-control" type="time" value={deathReg.time} readOnly />
                                    </div>
                                </div>
                                <div className="mb-3 row justify-content-center">
                                    <label className="col-sm-3 col-form-label">Place </label>
                                    <div className="col-sm-8">
                                        <input className="form-control" type="text" value={deathReg.place}readOnly />
                                    </div></div>
                                <div className="mb-3 row justify-content-center">
                                    <label className="col-sm-3 col-form-label">Father's/Husband's Name </label>
                                    <div className="col-sm-8">
                                        <input className="form-control" type="text" value={deathReg.fatherName}readOnly />
                                    </div></div>
                                <div className="mb-3 row justify-content-center">
                                    <label className="col-sm-3 col-form-label">Address </label>
                                    <div className="col-sm-8">
                                        {/* <input className="form-control" type="text" value={adderss} required onChange={(e) => { handleAddressChange(e) }} /> */}
                                        <textarea className="form-control" type="text" value={deathReg.permanentAddress} readOnly/>
                                    </div>
                                </div>



                                <div className='wraper'>   <input type="button" value="BACK" className='btn btn-lg' id='submitbutton' onClick={() => navigate(-1)} /></div>

                            </div>
                        </div>

                    </form>



                    <br></br>


                </div>
            </div>

        </div>

    )
}

export default DeathDetails;
import "../../Addcss/Complaint.css";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const BirthDetails = () => {
    const [birthReg, setBirthReg] = useState({});
    const navigate = useNavigate();
    const Id = useParams();
    
    console.log("Id",Id.id);
    console.log(typeof(Id));
    useEffect(() => {
        axios.get('http://localhost:8080/birthRegistration/birthDetails/'+Id.id, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + sessionStorage.getItem("tokenId")
            },

        }).then((res) => {
            console.log("res", res.data);
            setBirthReg(res.data);
            console.log("success", birthReg);
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
                        < h2 className="textStyleHeading">Birth Registration Details</h2>
                    </div>
                    <form className="form-inline">
                        <div className="border border-2 p-1" >
                            <div className='row justify-content-center'>
                                <h3 className='p-2 rounded textStyle' id="heading">Child Details
                                </h3>
                            </div>
                            <div>
                                <div className="mb-3 row justify-content-center">
                                    <label className="col-sm-3 col-form-label" >
                                        Name of child:
                                    </label>
                                    <div className="col-sm-8">
                                        <input className="form-control" type="text" value={birthReg.name} readOnly /><br />
                                    </div>
                                </div>

                                <div className="mb-3 row justify-content-center">
                                    <label className="col-sm-3 col-form-label">Gender:</label>
                                    <div className="col-sm-8">
                                        <input className="form-control" type="text"  value={birthReg.gender} readOnly />

                                    </div>
                                </div>


                                <div className="mb-3 row justify-content-center">
                                    <label className="col-sm-3 col-form-label">Date of Birth</label>
                                    <div className="col-sm-8">

                                        <input className="form-control" type="date" value={birthReg.dob} name="dob" readOnly />
                                    </div>
                                </div>
                                <div className="mb-3 row justify-content-center">
                                    <label className="col-sm-3 col-form-label">Day</label>
                                    <div className="col-sm-8">
                                    <input className="form-control"  value={birthReg.day} name="dob" readOnly />
                                    </div>
                                </div>

                                <div className="mb-3 row justify-content-center">
                                    <label className="col-sm-3 col-form-label">Time </label>
                                    <div className="col-sm-8">
                                        <input className="form-control" type="time" value={birthReg.birthTime} readOnly />
                                    </div>
                                </div>
                                <div className="mb-3 row justify-content-center">
                                    <label className="col-sm-3 col-form-label">Father's Name </label>
                                    <div className="col-sm-8">
                                        <input className="form-control" type="text" value={birthReg.fatherName}readOnly />
                                    </div></div>
                                <div className="mb-3 row justify-content-center">
                                    <label className="col-sm-3 col-form-label">Mother's Name </label>
                                    <div className="col-sm-8">
                                        <input className="form-control" type="text" value={birthReg.motherName}readOnly />
                                    </div></div>
                                <div className="mb-3 row justify-content-center">
                                    <label className="col-sm-3 col-form-label">Address </label>
                                    <div className="col-sm-8">
                                        {/* <input className="form-control" type="text" value={adderss} required onChange={(e) => { handleAddressChange(e) }} /> */}
                                        <textarea className="form-control" type="text" value={birthReg.address} readOnly/>
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

export default BirthDetails;
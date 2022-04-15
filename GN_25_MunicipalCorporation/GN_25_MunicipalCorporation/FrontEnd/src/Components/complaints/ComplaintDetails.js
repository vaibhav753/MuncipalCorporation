import "../Addcss/Complaint.css";
import React, { useEffect, useState } from 'react';
import complaintserv from "../../Services/ComplaintService";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Complaint from "./Complaint";

const ComplaintDetails = () => {
    const [complaint, setComlaint] = useState({});
    const navigate = useNavigate();
    const { tokenId } = useParams();

    console.log(tokenId);
    // complaintdetails

    useEffect(() => {
        // complaintserv.getComplaintdetails(tokenId)
        axios.get(`http://localhost:8080/complaintdetails/${tokenId}`, {
            headers: {
                'content-Type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("tokenId")}`
            }
        })
            .then((res) => {
                console.log("res", res.data);
                setComlaint(res.data);
                console.log("success", complaint);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [])

    const onClickEvent = (e) => {
        e.preventDefault();

        navigate('/complaintslist')
    }

    return (
        <div>

            <div className="row justify-content-center box-height">

                <div className="col-9 align-self-center shadow-lg" style={{ backgroundColor: '#ebf2fa' }} >
                    <div className="row justify-content-center p-2">
                        < h2 className="textStyleHeading">Complaint Details</h2>
                    </div>
                    <form className="form-inline"  >
                        <div className="border border-2 p-1" >
                            <div className='row justify-content-center'>
                                <h3 className='p-2 rounded textStyle'>Personal Information
                                </h3>
                            </div>

                            <div>
                                <div className="mb-3 row justify-content-center">
                                    <label className="col-sm-3 col-form-label" >
                                        First Name :
                                    </label>
                                    <div className="col-sm-8">
                                        <input className="form-control" value={complaint.firstName} type="text" maxLength={10} placeholder="First Name" /><br />

                                    </div>
                                </div>
                                <div className="mb-3 row justify-content-center">
                                    <label className="col-sm-3 col-form-label" >
                                        Last Name :
                                    </label>
                                    <div className="col-sm-8">
                                        <input className="form-control" value={complaint.lastName} type="text" placeholder="Last Name" /><br />

                                    </div>
                                </div>
                                <div className="mb-3 row justify-content-center">
                                    <label className="col-sm-3 col-form-label">Address </label>
                                    <div className="col-sm-8">
                                        <textarea className="form-control" value={complaint.address}   ></textarea>
                                    </div>
                                </div>
                                <div className="mb-3 row mx-4">
                                    <label className="col-sm-3 col-form-label">Contact Number </label>
                                    <div className="col-sm-4 mx-4">
                                        <input className="form-control" type="number" value={complaint.contactNo} />

                                    </div>
                                </div>
                                <div className="mb-4 row mx-4">
                                    <label className="col-sm-3 col-form-label">Email </label>
                                    <div className="col-sm-4 mx-4">
                                        <input className="form-control" type="email" value={complaint.email} />
                                    </div>
                                </div>
                            </div>
                            <div className="border border-2 p-1" >
                                <div className='row justify-content-center'>
                                    <h3 className='p-2 rounded textStyle'>Complaint Information
                                    </h3>
                                </div>
                                <div className="mb-3 row mx-4">
                                    <label className="col-sm-3 col-form-label">Complaint type</label>
                                    <div className="col-sm-4 mx-4">
                                        <input type="text" value={complaint.mainType}></input>

                                    </div>
                                </div>
                                <div className="mb-3 row mx-4">
                                    <label className="col-sm-3 col-form-label">Sub Complaint type</label>
                                    <div className="col-sm-4 mx-4">
                                        <input type="text" value={complaint.subType}></input>
                                    </div>
                                </div>
                                <div className="mb-3 row justify-content-center">
                                    <label className="col-sm-3 col-form-label">Complaint Description </label>
                                    <div className="col-sm-8">
                                        <textarea className="form-control" type="text" value={complaint.complaintDesc} />
                                    </div>
                                </div>
                                <div className="mb-3 row justify-content-center">
                                    <label className="col-sm-3 col-form-label">Specify complaint location </label>
                                    <div className="col-sm-8">
                                        <textarea className="form-control" type="text" value={complaint.complaintLoc} />
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

export default ComplaintDetails;
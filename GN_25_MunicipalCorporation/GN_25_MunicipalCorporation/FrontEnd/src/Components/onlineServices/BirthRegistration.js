import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Link, Navigate, useHistory, useParams } from "react-router-dom";
import '../../App.css';
import '../Addcss/formHeading.css'
import { useNavigate } from 'react-router-dom';
import { useJwt, isExpired, decodeToken } from "react-jwt";
import axios from 'axios';


function BirthRegistration() {

    const navigate = useNavigate();
    const mail = sessionStorage.getItem('email');
    console.log("email:");
    console.log(mail);



    const [childName, setChildName] = useState('');
    const [childNameErr, setChildNameErr] = useState('');
    const [gender, setGender] = useState('');
    const [dob, setDob] = useState('');
    const [dobErr, setDobErr] = useState('');
    const [day, setDay] = useState('');
    const [time, setTime] = useState('');
    const [fName, setFName] = useState('');
    const [fNameErr, setFNameErr] = useState('');
    const [mName, setMName] = useState('');
    const [mNameErr, setMNameErr] = useState('');
    const [adderss, setAddress] = useState('');
    const [email, setEmail] = useState(mail);
    const birthRegistration = {
        name: childName,
        gender: gender,
        dob: dob,
        day: day,
        birthTime: time,
        fatherName: fName,
        motherName: mName,
        address: adderss,
        email: mail
    }

    const handleChildNameChange = (e) => {
        let bName = e.target.value;
        if (bName.match('.*[0-9].*')) {
            setChildNameErr(true);
        }
        else {
            setChildNameErr(false);

        }
        setChildName(bName);
    }
    const handleGenderChange = (e) => {
        setGender(e.target.value);
    }
   
    const handleDobChange = (e) => {
        let dDob = e.target.value;
        let d1 = new Date(dDob);
        let d2 = new Date()
        if (d1 > d2) {
            setDobErr(true);
        }
        else {
            setDobErr(false);

        }

        setDob(dDob);
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var d = new Date(dob);
        console.log(d.getDay())
        document.getElementById("bday").value=days[d.getDay()];
        setDay(days[d.getDay()]);
    }
    const handleTimeChange = (e) => {
        console.log(e.target.value);
        setTime(e.target.value);
    }
    const handleFNameChange = (e) => {
        let fNm = e.target.value;
        if (fNm.match('.*[0-9].*')) {
            setFNameErr(true);
        }
        else {
            setFNameErr(false);

        }
        setFName(fNm);
    }
    const handleMNameChange = (e) => {
        let mNm = e.target.value;
        if (mNm.match('.*[0-9].*')) {
            setMNameErr(true);
        }
        else {
            setMNameErr(false);

        }
        setMName(mNm);
    }
    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    }
    console.log(birthRegistration);
    const handleSubmit = (e) => {

        console.log(birthRegistration);
        if (!childNameErr && !dobErr && !fNameErr && !mNameErr) {
           /*  axios.post('http://localhost:8080/birthRegistration', birthRegistration, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + sessionStorage.getItem("tokenId")
                },

            }) */
           // axios.defaults.headers.common['Authorization'] = localStorage.getItem("token");
            axios.post(`http://localhost:8080/birthRegistration`, birthRegistration, {
            headers: {
                'Content-Type': 'application/json',
                 'Authorization': `Bearer ${sessionStorage.getItem("tokenId")}` 
            }
        })
                .then(response => {
                    alert("Birth Registration Successfully completed once approved you will receive Birth Certificate through an Email");
                    console.log(response.data);
                    navigate("/")
                    /* history.push("/") */
                })
                .catch(err => console.log(err));
        }
        else {
            alert("Please give correct inputs")
            // window.location.reload();s
        }
    }

    return (
        <div>
            <div className="row justify-content-center box-height">
                <div className="col-9 align-self-center shadow-lg" style={{ backgroundColor: '#ebf2fa' }}>
                    <div className="row justify-content-center p-2">
                        < h2 className="textStyleHeading">Birth Registration Form</h2>
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
                                        <input className="form-control" type="text" value={childName} required onChange={(e) => { handleChildNameChange(e) }} /><br />
                                        {childNameErr ? <p className='text-danger'>Name should contain characters only</p> : ""}
                                    </div>
                                </div>

                                <div className="mb-3 row justify-content-center">
                                    <label className="col-sm-3 col-form-label">Gender:</label>
                                    <div className="col-sm-8">
                                        <input className="mx-4" type="radio" id="female" name="gender" value="female" required onChange={(e) => { handleGenderChange(e) }} />Female
                                        <input className="mx-4" type="radio" id="male" name="gender" value="male" onChange={(e) => { handleGenderChange(e) }} />Male

                                    </div>
                                </div>


                                <div className="mb-3 row justify-content-center">
                                    <label className="col-sm-3 col-form-label">Date of Birth</label>
                                    <div className="col-sm-8">

                                        <input className="form-control" type="date" value={dob} name="dob" required onChange={(e) => { handleDobChange(e) }} />
                                        {dobErr ? <p className='text-danger'>Birth date cannot be a future Date</p> : ""}
                                    </div>
                                </div>
                                <div className="mb-3 row  justify-content-center">
                                    <label className="col-sm-3 col-form-label">Day</label>
                                    <div className="col-sm-8">
                                    {/* <select className="form-control" name="day" id="day" required onChange={(e) => { handleDayChange(e) }}>
                                        <option value="day" disabled selected>Select Day</option>
                                        <option value="sunday">Sunday</option>
                                        <option value="monday">Monday</option>
                                        <option value="tuesday">Tuesday</option>
                                        <option value="wednesday">Wednesday</option>
                                        <option value="thursday">Thursday</option>
                                        <option value="friday">Friday</option>
                                        <option value="saturday">Saturday</option>
                                    </select> */}
                                    <input type="text" id='bday' className='form-control'  readOnly />
                                    {/* value={day} */}
                                    </div>
                                </div>

                                <div className="mb-3 row  justify-content-center ">
                                    <label className="col-sm-3 col-form-label">Time </label>
                                    <div className="col-sm-8">
                                        <input className="form-control" type="time" value={time} required onChange={(e) => { handleTimeChange(e) }} />
                                    </div>
                                </div>
                                <div className="mb-3 row justify-content-center">
                                    <label className="col-sm-3 col-form-label">Father's Name </label>
                                    <div className="col-sm-8">
                                        <input className="form-control" type="text" value={fName} required onChange={(e) => { handleFNameChange(e) }} />
                                        {fNameErr ? <p className='text-danger'>Name should contain characters only</p> : ""}
                                    </div></div>
                                <div className="mb-3 row justify-content-center">
                                    <label className="col-sm-3 col-form-label">Mother's Name </label>
                                    <div className="col-sm-8">
                                        <input className="form-control" type="text" value={mName} required onChange={(e) => { handleMNameChange(e) }} />
                                        {mNameErr ? <p className='text-danger'>Name should contain characters only</p> : ""}
                                    </div></div>
                                <div className="mb-3 row justify-content-center">
                                    <label className="col-sm-3 col-form-label">Address </label>
                                    <div className="col-sm-8">
                                        {/* <input className="form-control" type="text" value={adderss} required onChange={(e) => { handleAddressChange(e) }} /> */}
                                        <textarea className="form-control" type="text" value={adderss} required onChange={(e) => { handleAddressChange(e) }} />
                                    </div>
                                </div>

                                <br />
                                <div className='wraper'>   <input type="button" value="Submit" className='btn  btn-lg' id='submitbutton' onClick={(e) => { handleSubmit(e) }} />

                                </div>
                                <br />
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>


    );
}

export default BirthRegistration;
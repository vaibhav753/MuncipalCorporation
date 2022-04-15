import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '../../App.css';
import '../Addcss/formHeading.css'
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function DeathRegistration() {
    const mail = sessionStorage.getItem('email');
    console.log(mail);
    const [dFullName, setDFullName] = useState('');
    const [dFullNameErr, setDFullNameErr] = useState(false);
    const [gender, setGender] = useState('');
    const [dob, setDob] = useState('');
    const [dobErr, setDobErr] = useState(false);
    const [dod, setDod] = useState('');
    const [dodErr, setDodErr] = useState(false);
    const [day, setDay] = useState('');
    const [time, setTime] = useState('');
    const [place, setPlace] = useState('');
    const [placeErr, setPlaceErr] = useState(false);
    const [fName, setFName] = useState('');
    const [fNameErr, setFNameErr] = useState(false);
    const [adderss, setAddress] = useState('');
    const [email, setEmail] = useState(mail);
    const data = {
        name: dFullName, gender: gender, dob: dob, dod: dod, day: day, time: time
        , place: place, fatherName: fName, permanentAddress: adderss, email: mail
    };


    const navigate = useNavigate();
    const handleDFullNameChange = (e) => {
        let dName = e.target.value;
        if (dName.match('.*[0-9].*')) {
            setDFullNameErr(true);
        }
        else {
            setDFullNameErr(false);

        }
        setDFullName(dName);
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
    }
    const handleDodChange = (e) => {
        let dDod = e.target.value;
        let d1 = new Date(dDod);
        let d2 = new Date()
        console.log(d1, d2)
        if (d1 > d2 ) {
            setDodErr(true);
        } else if (d1 < dob) {
            setDodErr(true);
        }
        else {
            
            setDodErr(false);
            setDod(dDod);
            var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            var d = new Date(dod);
            console.log(d.getDay())
            setDay(days[d.getDay()]);

        }
        

    }
    const handleTimeChange = (e) => {
        setTime(e.target.value);
    }
    const handlePlaceChange = (e) => {
        let dPlace = e.target.value;
        if (dPlace.match('.*[0-9].*')) {
            setPlaceErr(true);
        }
        else {
            setPlaceErr(false);

        }
        setPlace(dPlace);
    }
    const handleFNameChange = (e) => {
        let fName = e.target.value;
        if (fName.match('.*[0-9].*')) {
            setFNameErr(true);
        }
        else {
            setFNameErr(false);

        }
        setFName(fName);
    }
    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    }
    const handleSubmit = (e) => {
        if (!dobErr && !dodErr && !fNameErr && !dFullNameErr && !placeErr && (dod > dob)) {

            axios.post('http://localhost:8080/deathRegistration', data, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + sessionStorage.getItem("tokenId")
                },

            })
                .then(response => {
                    alert("Death Registration Successfully completed once approved you will recieve Death Certificate through an Email");
                    console.log(response);
                    navigate("/");


                    /* history.push("/") */
})
                .catch(err => console.log(err));
            /* alert('A form was submitted with Name :"' + dFullName);} */

        }
        else {
            alert("Please give correct inputs")
            // window.location.reload();
        }

    }


    return (
        <div>
            <div className="row justify-content-center box-height " >

                <div className="col-9 align-self-center shadow-lg" style={{ backgroundColor: '#ebf2fa' }} >
                    <div className="row justify-content-center p-2"><h2 className='textStyleHeading'>Death Registration Form</h2></div>
                    <form className="form-inline" >

                        <div className="border border-2 p-1">
                            <div className='row justify-content-center '> <h3 className='p-2 rounded' style={{ fontFamily: 'Verdana', textAlign: "center" }}>Deceased Details</h3></div>
                            <div className="mb-3 row justify-content-center">
                                <label className="col-sm-3 col-form-label">Name of Person</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" required onChange={(e) => { handleDFullNameChange(e) }} />
                                    {dFullNameErr ? <p className='text-danger'>Name should contain characters only</p> : ""}
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

                                    <input className="form-control" type="date" name="dob" required onChange={(e) => { handleDobChange(e) }} />
                                    {dobErr ? <p className='text-danger'>Date of birth cannot be a future date.</p> : ""}
                                </div>
                            </div>

                            <div className="mb-3 row justify-content-center">
                                <label className="col-sm-3 col-form-label">Date of Death</label>
                                <div className="col-sm-8">
                                    <input type="date" className="form-control" name="dod" required onChange={(e) => { handleDodChange(e) }} />
                                    {dodErr ? <p className='text-danger'>Date of death cannot be a future date.</p> : ""}
                                </div>
                            </div>

                            <div className="mb-3 row justify-content-center">
                                <label className="col-sm-3 col-form-label">Day of Death</label>
                                <div className="col-sm-8">
                                <input type="text"  className='form-control' value={day} readOnly />

                                </div>
                            </div>

                            <div className="mb-3 row justify-content-center">
                                <label className="col-sm-3 col-form-label">Time of Death</label>
                                <div className="col-sm-8">
                                    <input type="time" className="form-control" required onChange={(e) => { handleTimeChange(e) }} />
                                </div>
                            </div>

                            <div className="mb-3 row justify-content-center">
                                <label className="col-sm-3 col-form-label">Place of Death</label>
                                <div className="col-sm-8">
                                    <input className="form-control" required onChange={(e) => { handlePlaceChange(e) }} />
                                    {placeErr ? <p className='text-danger'>Place should contain characters only</p> : ""}
                                </div>
                            </div>

                            <div className="mb-3 row justify-content-center">
                                <label className="col-sm-3 col-form-label">Father's/Husband's Fullname</label>
                                <div className="col-sm-8">
                                    <input className="form-control" type="text" required onChange={(e) => { handleFNameChange(e) }} />
                                    {fNameErr ? <p className='text-danger'>Name should contain characters only</p> : ""}
                                </div>
                            </div>




                            <div className="mb-3 row justify-content-center">
                                <label className="col-sm-3 col-form-label">Address </label>
                                <div className="col-sm-8">
                                    {/* <input className="form-control" type="text" value={adderss} required onChange={(e) => { handleAddressChange(e) }} /> */}
                                    <textarea className="form-control" type="text" value={adderss} required onChange={(e) => { handleAddressChange(e) }} />
                                </div>
                            </div>

                            <br />
                            <div className='wraper'>   <input type="button" value="Submit" className='btn btn-lg' id='submitbutton' onClick={(e) => { handleSubmit(e) }} /></div>
                            <br />
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
}

export default DeathRegistration;
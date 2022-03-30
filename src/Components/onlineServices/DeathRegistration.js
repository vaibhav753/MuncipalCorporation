import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '../../App.css';
import '../Addcss/formHeading.css'


function DeathRegistration() {
    const [dFullName, setDFullName] = useState('');
    const [gender, setGender] = useState('');
    const [dob, setDob] = useState('');
    const [dod, setDod] = useState('');
    const [day, setDay] = useState('');
    const [time, setTime] = useState('');
    const [place, setPlace] = useState('');
    const [fName, setFName] = useState('');
    const [mName, setMName] = useState('');
    const [adderss, setAddress] = useState('');


    const handleDFullNameChange = (e) => {
        setDFullName(e.target.value);
    }
    const handleGenderChange = (e) => {
        setGender(e.target.value);
    }
    const handleDayChange = (e) => {
        setDay(e.target.value);
    }
    const handleDobChange = (e) => {
        setDob(e.target.value);
    }
    const handleDodChange = (e) => {
        setDod(e.target.value);
    }
    const handleTimeChange = (e) => {
        setTime(e.target.value);
    }
    const handlePlaceChange = (e) => {
        setPlace(e.target.value);
    }
    const handleFNameChange = (e) => {
        setFName(e.target.value);
    }
    const handleMNameChange = (e) => {
        setMName(e.target.value);
    }
    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    }
    const handleSubmit = (e) => {

        alert('A form was submitted with Name :"' + dFullName);

        e.preventDefault();

    }


    return (
        <div>
            <div className="row justify-content-center box-height " >

                <div className="col-9 align-self-center shadow-lg" style={{ backgroundColor: '#ebf2fa' }} >
                    <div className="row justify-content-center p-2"><h2 className='textStyleHeading'>Death Registration Form</h2></div>
                    <form className="form-inline" onSubmit={(e) => { handleSubmit(e) }}>

                        <div className="border border-2 p-1">
                            <div className='row justify-content-center '> <h3 className='p-2 rounded' style={{ fontFamily: 'Verdana', textAlign: "center" }}>Deceased Details</h3></div>
                            <div className="mb-3 row justify-content-center">
                                <label className="col-sm-3 col-form-label">Name of Person</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" value={dFullName} required onChange={(e) => { handleDFullNameChange(e) }} />
                                </div>
                            </div>


                            <div className="mb-3 row justify-content-center">
                                <label className="col-sm-3 col-form-label">Gender:</label>
                                <div className="col-sm-8">
                                    <input className="mx-4" type="radio" id="female" name="gender" value="female" required onChange={(e) => { handleGenderChange(e) }} />Female
                                    <input className="mx-4" type="radio" id="male" name="gender" value="male" onChange={(e) => { handleGenderChange(e) }} />Male

                                </div>
                            </div>


                            <div className="mb-3 row mx-4">
                                <label className="col-sm-3 col-form-label">Date of Birth</label>
                                <div className="col-sm-4 mx-4">

                                    <input className="form-control" type="date" value={dob} name="dob" required onChange={(e) => { handleDobChange(e) }} />
                                </div>
                            </div>

                            <div className="mb-3 row mx-4">
                                <label className="col-sm-3 col-form-label">Date of Death</label>
                                <div className="col-sm-4 mx-4">
                                    <input type="date" className="form-control" value={dod} name="dod" required onChange={(e) => { handleDodChange(e) }} />
                                </div>
                            </div>

                            <div className="mb-3 row mx-4">
                                <label className="col-sm-3 col-form-label">Day of Death</label>
                                <div className="col-sm-4 mx-4">
                                    <select className="form-control" name="day" id="day" required onChange={(e) => { handleDayChange(e) }}><br />
                                        <option value="day" disabled selected>Select Day</option>
                                        <option value="sunday">Sunday</option>
                                        <option value="monday">Monday</option>
                                        <option value="tuesday">Tuesday</option>
                                        <option value="wednesday">Wednesday</option>
                                        <option value="thursday">Thursday</option>
                                        <option value="friday">Friday</option>
                                        <option value="saturday">Saturday</option>
                                    </select>
                                </div>
                            </div>

                            <div className="mb-3 row mx-4">
                                <label className="col-sm-3 col-form-label">Time of Death</label>
                                <div className="col-sm-4 mx-4">
                                    <input type="time" className="form-control" value={time} required onChange={(e) => { handleTimeChange(e) }} />
                                </div>
                            </div>

                            <div className="mb-3 row mx-4">
                                <label className="col-sm-3 col-form-label">Place of Death</label>
                                <div className="col-sm-4 mx-4">
                                    <input className="form-control" value={place} required onChange={(e) => { handlePlaceChange(e) }} />
                                </div>
                            </div>

                            <div className="mb-3 row justify-content-center">
                                <label className="col-sm-3 col-form-label">Father's Name</label>
                                <div className="col-sm-8">
                                    <input className="form-control" type="text" value={fName} required onChange={(e) => { handleFNameChange(e) }} />
                                </div>
                            </div>

                            <div className="mb-3 row justify-content-center">
                                <label className="col-sm-3 col-form-label">Mother's Name</label>
                                <div className="col-sm-8">
                                    <input className="form-control" type="text" value={mName} required onChange={(e) => { handleMNameChange(e) }} />
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
                            <div className='wraper'>   <input type="submit" value="Submit" className='btn btn-lg' id='submitbutton' /></div>
                            <br />
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
}

export default DeathRegistration;
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import '../../App.css';
import '../Addcss/formHeading.css'

function BirthRegistration() {
    const [childName, setChildName] = useState('');
    const [childNameErr, setChildNameErr]=useState(false);
    const [gender, setGender] = useState('');
    const [dob, setDob] = useState('');
    const [dobErr, setDobErr]=useState(false);
    const [day, setDay] = useState('');
    const [time, setTime] = useState('');
    const [fName, setFName] = useState('');
    const [fNameErr, setFNameErr]=useState(false);
    const [mName, setMName] = useState('');
    const [mNameErr, setMNameErr]=useState(false);
    const [adderss, setAddress] = useState('');

    const handleChildNameChange = (e) => {
        let cName=e.target.value;
        if(cName.match('.*[0-9].*'))
        {
            setChildNameErr(true);
        }
        else{
            setChildNameErr(false);
          
        }
        setChildName(cName);
    }
    const handleGenderChange = (e) => {
        setGender(e.target.value);
    }
    const handleDayChange = (e) => {
        setDay(e.target.value);
    }
    const handleDobChange = (e) => {
        let cDob=e.target.value;
        let d1= new Date(cDob);
        let d2=new Date()
        if(d1>d2)
        {
            setDobErr(true);
        }
        else{
            setDobErr(false);
          
        }
        setDob(cDob);
    }
    const handleTimeChange = (e) => {
        setTime(e.target.value);
    }
    const handleFNameChange = (e) => {
        let father=e.target.value;
        if(father.match('.*[0-9].*'))
        {
            setFNameErr(true);
        }
        else{
            setFNameErr(false);
          
        }
        setFName(father);
    }
    const handleMNameChange = (e) => {
        let mother=e.target.value;
        if(mother.match('.*[0-9].*'))
        {
            setMNameErr(true);
        }
        else{
            setMNameErr(false);
          
        }
        setMName(mother);
    }
    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    }
    const handleSubmit = (e) => {
        alert('A form was submitted with Name :"' + childName);
        e.preventDefault();
    }
    return (
        <div>
            <div className="row justify-content-center box-height">
                <div className="col-9 align-self-center shadow-lg" style={{ backgroundColor: '#ebf2fa' }}>
                    <div className="row justify-content-center p-2">
                        < h2 className="textStyleHeading">Birth Registration Form</h2>
                    </div>
                    <form className="form-inline" onSubmit={(e) => { handleSubmit(e) }}>
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
                                        <input className="form-control" type="text" /* value={childName} */ required onChange={(e) => { handleChildNameChange(e) }} />
                                        {childNameErr?<p className='text-danger'>Name should contain characters only</p>:""}
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

                                        <input className="form-control" type="date"  name="dob" required onChange={(e) => { handleDobChange(e) }} />
                                        {dobErr?<p className='text-danger'>Date of birth cannot be a future date.</p>:""}
                                    </div>
                                </div>
                                <div className="mb-3 row justify-content-center">
                                    <label className="col-sm-3 col-form-label">Day</label>
                                    <div className="col-sm-8"><select className="form-control" name="day" id="day" required onChange={(e) => { handleDayChange(e) }}>
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

                                <div className="mb-3 row justify-content-center ">
                                    <label className="col-sm-3 col-form-label">Time </label>
                                    <div className="col-sm-8">
                                        <input className="form-control" type="time"  required onChange={(e) => { handleTimeChange(e) }} />
                                    </div>
                                </div>
                                <div className="mb-3 row justify-content-center">
                                    <label className="col-sm-3 col-form-label">Father's Name </label>
                                    <div className="col-sm-8">
                                        <input className="form-control" type="text" required onChange={(e) => { handleFNameChange(e) }} />
                                        {fNameErr?<p className='text-danger'>Name should contain characters only</p>:""}
                                    </div></div>
                                <div className="mb-3 row justify-content-center">
                                    <label className="col-sm-3 col-form-label">Mother's Name </label>
                                    <div className="col-sm-8">
                                        <input className="form-control" type="text"  required onChange={(e) => { handleMNameChange(e) }} />
                                        {mNameErr?<p className='text-danger'>Name should contain characters only</p>:""}
                                    </div></div>
                                <div className="mb-3 row justify-content-center">
                                    <label className="col-sm-3 col-form-label">Address </label>
                                    <div className="col-sm-8">
                                        {/* <input className="form-control" type="text" value={adderss} required onChange={(e) => { handleAddressChange(e) }} /> */}
                                        <textarea className="form-control" type="text" value={adderss} required onChange={(e) => { handleAddressChange(e) }} />
                                    </div>
                                </div>

                                <br />
                                <div className='wraper'>   <input type="submit" value="Submit" className='btn  btn-lg' id='submitbutton' /></div>
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
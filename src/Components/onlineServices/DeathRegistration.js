import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '../../App.css';
import '../Addcss/formHeading.css'


function DeathRegistration() {
    const [dFullName, setDFullName] = useState('');
    const [dFullNameErr, setDFullNameErr] = useState(false);
    const [gender, setGender] = useState('');
    const [dob, setDob] = useState('');
    const [dobErr, setDobErr]=useState(false);
    const [dod, setDod] = useState('');
    const [dodErr, setDodErr]=useState(false);
    const [day, setDay] = useState('');
    const [time, setTime] = useState('');
    const [place, setPlace] = useState('');
    const [placeErr, setPlaceErr] = useState(false);
    const [fName, setFName] = useState('');
    const [fNameErr, setFNameErr] = useState(false);
    const [adderss, setAddress] = useState('');
    

    const handleDFullNameChange = (e) => {
        let dName=e.target.value;
        if(dName.match('.*[0-9].*'))
        {
            setDFullNameErr(true);
        }
        else{
            setDFullNameErr(false);
          
        }
        setDFullName(dName);
    }
    const handleGenderChange = (e) => {
        setGender(e.target.value);
    }
    const handleDayChange = (e) => {
        setDay(e.target.value);
    }
    const handleDobChange = (e) => {
        let dDob=e.target.value;
        let d1= new Date(dDob);
        let d2=new Date()
        if(d1>d2)
        {
            setDobErr(true);
        }
        else{
            setDobErr(false);
          
        }
        setDob(dDob);
    }
    const handleDodChange = (e) => {
        let dDod=e.target.value;
        let d1= new Date(dDod);
        let d2=new Date()
        if(d1>d2)
        {
            setDodErr(true);
        }
        else{
            setDodErr(false);
          
        }
        setDob(dDod);
        
    }
    const handleTimeChange = (e) => {
        setTime(e.target.value);
    }
    const handlePlaceChange = (e) => {
        let dPlace=e.target.value;
        if(dPlace.match('.*[0-9].*'))
        {
            setPlaceErr(true);
        }
        else{
            setPlaceErr(false);
          
        }
        setPlace(dPlace);
    }
    const handleFNameChange = (e) => {
        let fName=e.target.value;
        if(fName.match('.*[0-9].*'))
        {
            setFNameErr(true);
        }
        else{
            setFNameErr(false);
          
        }
        setFName(fName);
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
                                    <input type="text" className="form-control" required onChange={(e) => { handleDFullNameChange(e) }} />
                                    {dFullNameErr?<p className='text-danger'>Name should contain characters only</p>:""}
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
                                    {dobErr?<p className='text-danger'>Date of birth cannot be a future date.</p>:""}
                                </div>
                            </div>

                            <div className="mb-3 row justify-content-center">
                                <label className="col-sm-3 col-form-label">Date of Death</label>
                                <div className="col-sm-8">
                                    <input type="date" className="form-control"  name="dod" required onChange={(e) => { handleDodChange(e) }} />
                                    {dodErr?<p className='text-danger'>Date of death cannot be a future date.</p>:""}
                                </div>
                            </div>

                            <div className="mb-3 row justify-content-center">
                                <label className="col-sm-3 col-form-label">Day of Death</label>
                                <div className="col-sm-8">
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

                            <div className="mb-3 row justify-content-center">
                                <label className="col-sm-3 col-form-label">Time of Death</label>
                                <div className="col-sm-8">
                                    <input type="time" className="form-control"  required onChange={(e) => { handleTimeChange(e) }} />
                                </div>
                            </div>

                            <div className="mb-3 row justify-content-center">
                                <label className="col-sm-3 col-form-label">Place of Death</label>
                                <div className="col-sm-8">
                                    <input className="form-control"  required onChange={(e) => { handlePlaceChange(e) }} />
                                    {placeErr?<p className='text-danger'>Place should contain characters only</p>:""}
                                </div>
                            </div>

                            <div className="mb-3 row justify-content-center">
                                <label className="col-sm-3 col-form-label">Father's/Husband's Fullname</label>
                                <div className="col-sm-8">
                                    <input className="form-control" type="text"  required onChange={(e) => { handleFNameChange(e) }} />
                                    {fNameErr?<p className='text-danger'>Name should contain characters only</p>:""}
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
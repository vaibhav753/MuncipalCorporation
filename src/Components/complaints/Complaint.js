import "../Addcss/Complaint.css";
import React, { useState } from 'react';

const Complaint = () => {
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [FirstNameErr, setFirstNameErr]=useState(false);
    const [LastNameErr, setLastNameErr]=useState(false);
    const [adderss, setAddress] = useState('');
    const [contactNum, setContactNum] = useState('');
   
    const [email1, setEmail1] = useState('');
    const [complaintType, setComplaintType] = useState('');
    const [subComplaintType, setSubComplaintType] = useState('');
    const [complaintDescription, setComplaintDescription] = useState('');
    const [complaintLocation, setcomplaintLocation] = useState('');


    const handleFirstNameChange = (e) => {
        let Name=e.target.value;
        if(Name.match('.*[0-9].*'))
        {
            setFirstNameErr(true);
        }
        else{
            setFirstNameErr(false);
          
        }
        setFirstName(Name);
    }

    const handleLastNameChange = (e) => {
        let Name=e.target.value;
        if(Name.match('.*[0-9].*'))
        {
            setLastNameErr(true);
        }
        else{
            setLastNameErr(false);
          
        }
        setLastName(Name);
    }

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    }

    const handleContactNumChange = (e) => {
       
        setContactNum(e.target.value);

    }

    const handleEmailChange = (e) => {
        setEmail1(e.target.value);
    }

    const handleComplaintType = (e) => {
        setComplaintType(e.target.value);
    }

    const handleComplaintSubType = (e) => {
        setSubComplaintType(e.target.value);
    }

    const handleComplaintDescription = (e) => {
        setComplaintDescription(e.target.value);
    }

    const handleComplaintLocation = (e) => {
        setcomplaintLocation(e.target.value);
    }

    const handleSubmit = (e) => {
        alert('A form was submitted with Name :' + FirstName +' ' +LastName);
        e.preventDefault();
    }


    return (
        <div>
            <div className="row justify-content-center box-height">

                <div className="col-9 align-self-center shadow-lg" style={{ backgroundColor: '#ebf2fa' }} >
                    <div className="row justify-content-center p-2">
                        < h2 className="textStyleHeading">Complaint Registration</h2>
                    </div>
                    <form className="form-inline" >
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
                                        <input className="form-control" type="text" placeholder="First Name" required onChange={(e) => { handleFirstNameChange(e) }}/><br />
                                        {FirstNameErr?<p className='text-danger'>Name should contain characters only</p>:""}
                                    </div>
                                </div>
                                <div className="mb-3 row justify-content-center">
                                    <label className="col-sm-3 col-form-label" >
                                        Last Name :
                                    </label>
                                    <div className="col-sm-8">
                                        <input className="form-control" type="text" placeholder="Last Name" required onChange={(e) => { handleLastNameChange(e) }}/><br />
                                        {LastNameErr?<p className='text-danger'>Name should contain characters only</p>:""}
                                    </div>
                                </div>
                                <div className="mb-3 row justify-content-center">
                                    <label className="col-sm-3 col-form-label">Address </label>
                                    <div className="col-sm-8">
                                        <textarea className="form-control" required placeholder="Enter your address here" onChange={(e) => { handleAddressChange(e) }}></textarea>
                                    </div>
                                </div>
                                <div className="mb-3 row mx-4">
                                    <label className="col-sm-3 col-form-label">Contact Number </label>
                                    <div className="col-sm-4 mx-4">
                                        <input minLength="10" maxLength="10" className="form-control" type="tel" required placeholder="Contact number" onChange={(e) => { handleContactNumChange(e) }} />
    
                                    </div>
                                </div>
                                <div className="mb-4 row mx-4">
                                    <label className="col-sm-3 col-form-label">Email </label>
                                    <div className="col-sm-4 mx-4">
                                        <input className="form-control" type="email" placeholder="name@example.com" required onChange={(e) => { handleEmailChange(e) }}/>
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
                                        <select className="form-control" name="day" id="day" required onChange={(e) => { handleComplaintType(e) }}>
                                            <option value="day" disabled selected>Type-1</option>
                                            <option value="Type1">Type-2</option>
                                            <option value="Type2">Type-3</option>

                                        </select>
                                    </div>
                                </div>
                                <div className="mb-3 row mx-4">
                                    <label className="col-sm-3 col-form-label">Sub Complaint type</label>
                                    <div className="col-sm-4 mx-4">
                                        <select className="form-control" name="day" id="day" required onChange={(e) => { handleComplaintSubType(e) }}>
                                            <option value="day" disabled selected>Type</option>
                                            <option value="Type1">Type1</option>
                                            <option value="Type2">Type2</option>

                                        </select>
                                    </div>
                                </div>
                                <div className="mb-3 row justify-content-center">
                                    <label className="col-sm-3 col-form-label">Complaint Description </label>
                                    <div className="col-sm-8">
                                        <textarea className="form-control" type="text" required placeholder="Complaint Description" onChange={(e) => { handleComplaintDescription(e) }}/>
                                    </div>
                                </div>
                                <div className="mb-3 row justify-content-center">
                                    <label className="col-sm-3 col-form-label">Specify complaint location </label>
                                    <div className="col-sm-8">
                                        <textarea className="form-control" type="text" required placeholder="Complaint location" onChange={(e) => { handleComplaintLocation(e) }}/>
                                    </div>
                                </div>



                                <br />
                                <div className='wraper'>   <input type="submit" value="Submit" className='btn btn-lg' id='submitbutton' onSubmit={(e) => { handleSubmit(e) }} /></div>
                                <br />

                            </div>
                        </div>

                    </form>
                </div>
            </div>

        </div>

    )
}

export default Complaint;
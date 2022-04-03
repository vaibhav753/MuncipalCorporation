import '../Addcss/Registration.css'
import NavigationBar from './NavigationBar';
import '../Addcss/button.css'
import '../Addcss/formHeading.css'
import React, { useState } from 'react';

const Registration = () => {
    const [name, setName] = useState('');
    const [nameErr, setNameErr] = useState('');
    const [email1, setEmail1] = useState('');
    const [password, setPassword] = useState('');
    const [passwordErr, setPasswordErr] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [contactNum, setContactNum] = useState('');
    const [contactNumErr, setContactNumErr] = useState('');
    const [adderss, setAddress] = useState('');

    const handleNameChange = (e) => {
        let name=e.target.value;
        if(name.match('.*[0-9].*'))
        {
            setNameErr(true);
        }
        else{
            setNameErr(false);
          
        }
        setName(name);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value)
           
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

    const handleSubmit = (e) => {
        
        e.preventDefault();
      
    }


    return (
        <div className="row justify-content-center ">

            <div className="row justify-content-center p-2 box-height">
                {/* <NavigationBar></NavigationBar> */}
                <br></br>
                <div className="col-6 align-self-center shadow-lg" style={{ backgroundColor: '#ebf2fa' }}>
                    <div className="row justify-content-center p-2">

                        <h2 className='textStyleHeading'>Create an account</h2>

                        <form className="form-inline">
                            <div className='mb-3 row justify-content-center' >
                                <label className="col-sm-3 col-form-label">Name</label>
                                <div className="col-sm-8">
                                    <input type="text" id="name" className="form-control form-control-lg" placeholder="Enter Name" required onChange={(e) => { handleNameChange(e) }} />
                                    {nameErr?<p className='text-danger'>Name should contain characters only</p>:""}
                                </div>
                            </div>

                            <div className='mb-3 row justify-content-center'>
                                <label className="col-sm-3 col-form-label">Email</label>
                                <div className="col-sm-8">
                                    <input type="email" id="email" className="form-control form-control-lg" placeholder="name@example.com" required onChange={(e) => { handleEmailChange(e) }} />
                                </div>
                            </div>

                            <div className='mb-3 row justify-content-center'>
                                <label className="col-sm-3 col-form-label">Password</label>
                                <div className="col-sm-8">
                                    <input type="password" id="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" onChange={(e) => { handlePasswordChange(e) }} className="form-control form-control-lg" />
                                </div>
                            </div>

                            <div className='mb-3 row justify-content-center'>
                                <label className="col-sm-3 col-form-label">Confirm Password</label>
                                <div className="col-sm-8">
                                    <input type="password" id="confirm_password" pattern={password} title='password and confirm password are not matching' onChange={(e) => { handleConfirmPasswordChange(e) }} className="form-control form-control-lg" />
                                    <p className='text-danger'>{passwordErr}</p>
                                </div>
                            </div>

                            <div className="mb-3 row justify-content-center">
                                    <label className="col-sm-3 col-form-label">Contact Number </label>
                                    <div className="col-sm-8 ">
                                        <input minLength="10" maxLength="10" className="form-control form-control-lg" type="tel" required placeholder="Contact number" onChange={(e) => { handleContactNumChange(e) }} />
    
                                    </div>
                                </div>

                                <div className="mb-3 row justify-content-center">
                                    <label className="col-sm-3 col-form-label">Address </label>
                                    <div className="col-sm-8">
                                        <textarea className="form-control form-control-lg" required placeholder="Enter your address here" onChange={(e) => { handleAddressChange(e) }}></textarea>
                                    </div>
                                </div>


                            <div className='wraper'>
                                <input type="submit" value="Register" onSubmit={(e) => { handleSubmit(e) }} className='btn btn-primary btn-lg' id='submitbutton' />
                            </div>

                            <p className="text-center mt-5 ">Have already an account? <a href="/login" className="fw-bold">Login here</a></p>
                        </form>
                    </div>
                </div >
            </div >

        </div >


    )
}

export default Registration;
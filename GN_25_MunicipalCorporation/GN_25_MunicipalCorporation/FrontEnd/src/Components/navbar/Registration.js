import '../Addcss/Registration.css';
import '../Addcss/button.css'
import '../Addcss/formHeading.css'
import React, { useState } from 'react';
import registrationService from '../../Services/RegistrationService';
import { Navigate, useNavigate } from 'react-router-dom';

const Registration = () => {
    const [fisrtName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [nameErr, setNameErr] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordErr, setPasswordErr] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [contactNum, setContactNum] = useState('');
    const [contactNumErr, setContactNumErr] = useState('');
    const [adderss, setAddress] = useState('');
    const [gender, setGender] = useState();

    // const handleNameChange = (e) => {
    //     let name = e.target.value;
    //     if (name.match('.*[0-9].*')) {
    //         setNameErr(true);
    //     }
    //     else {
    //         setNameErr(false);

    //     }
    // }

    const navigate = useNavigate();

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const user = {
        firstName: fisrtName,
        lastName: lastName,
        email: email,
        password: confirmPassword,
        gender: gender,
        contactNo: contactNum,
        address: adderss
    }

    console.log("data", user)

    const handleSubmit = (e) => {
        e.preventDefault();
        registrationService.addUser(user)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            })

        alert("Registration Sucessfully Done!!!!");
        navigate('/login');
    }


    return (
        <div className="row justify-content-center ">

            <div className="row justify-content-center p-2 box-height">
                <br></br>
                <div className="col-6 align-self-center shadow-lg" style={{ backgroundColor: '#ebf2fa' }}>
                    <div className="row justify-content-center p-2">

                        <h2 className='textStyleHeading'>Create an account</h2>

                        <form className="form-inline" onSubmit={(e) => { handleSubmit(e) }}>
                            <div className='mb-3 row justify-content-center' >
                                <label className="col-sm-3 col-form-label">First Name</label>
                                <div className="col-sm-8">
                                    <input type="text" id="name" className="form-control form-control-lg" pattern="[A-Za-z\\s]*" title="Name is not proper" placeholder="Enter Name" required onChange={(e) => { setFirstName(e.target.value) }} />
                                </div>
                            </div>
                            <div className='mb-3 row justify-content-center' >
                                <label className="col-sm-3 col-form-label">Last Name</label>
                                <div className="col-sm-8">
                                    <input type="text" id="name" className="form-control form-control-lg" pattern="[A-Za-z\\s]*" title="Name is not proper" placeholder="Enter Name" required onChange={(e) => { setLastName(e.target.value) }} />
                                </div>
                            </div>

                            <div className="mb-3 row justify-content-center">
                                <label className="col-sm-3 col-form-label">Gender:</label>
                                <div className="col-sm-8">
                                    <input className="mx-4" type="radio" id="female" name="gender" value="FEMALE" required onChange={(e) => { setGender(e.target.value) }} />Female
                                    <input className="mx-4" type="radio" id="male" name="gender" value="MALE" onChange={(e) => { setGender(e.target.value) }} />Male

                                </div>
                            </div>

                            <div className='mb-3 row justify-content-center'>
                                <label className="col-sm-3 col-form-label">Email</label>
                                <div className="col-sm-8">
                                    <input type="email" id="email" className="form-control form-control-lg" placeholder="name@example.com" required onChange={(e) => { setEmail(e.target.value) }} />
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
                                    <input type="password" id="confirm_password" pattern={password} title='password and confirm password are not matching' onChange={(e) => { setConfirmPassword(e.target.value) }} className="form-control form-control-lg" />
                                    <p className='text-danger'>{passwordErr}</p>
                                </div>
                            </div>

                            <div className="mb-3 row justify-content-center">
                                <label className="col-sm-3 col-form-label">Contact Number </label>
                                <div className="col-sm-8 ">
                                    <input minLength="10" maxLength="10" className="form-control form-control-lg" type="tel" required placeholder="Contact number" onChange={(e) => { setContactNum(e.target.value) }} />

                                </div>
                            </div>

                            <div className="mb-3 row justify-content-center">
                                <label className="col-sm-3 col-form-label">Address </label>
                                <div className="col-sm-8">
                                    <textarea className="form-control form-control-lg" required placeholder="Enter your address here" onChange={(e) => { setAddress(e.target.value) }}></textarea>
                                </div>
                            </div>


                            <div className='wraper'>
                                <input type="submit" value="Register" className='btn btn-primary btn-lg' id='submitbutton' />
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
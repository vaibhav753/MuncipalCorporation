import '../Addcss/Registration.css'
import '../Addcss/button.css'
import '../Addcss/formHeading.css'
import React, { useState } from 'react';
// import HODServices from '../../service/HODServices';
import axios from 'axios';

const HODRegistration = () => {
    const [email, setEmail1] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [nameErr, setNameErr] = useState('');
    const [gender, setGender] = useState('');
    const [contactNo, setContactNum] = useState('');
    const [contactNumErr, setContactNumErr] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');
    const [passwordErr, setPasswordErr] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [role, setRole] = useState();


    const handleEmailChange = (e) => {
        setEmail1(e.target.value);
    }
    const handleFirstNameChange = (e) => {
        let name = e.target.value;
        if (name.match('.*[0-9].*')) {
            setNameErr(true);
        }
        else {
            setNameErr(false);

        }
        setFirstName(name);
    }
    const handleLastNameChange = (e) => {
        let name = e.target.value;
        if (name.match('.*[0-9].*')) {
            setNameErr(true);
        }
        else {
            setNameErr(false);

        }
        setLastName(name);
    }

    const handlerGenderChange = (e) => {
        setGender(e.target.value);
        console.log(gender)
    }
    const handleContactNumChange = (e) => {

        setContactNum(e.target.value);

    }
    const handleAddressChange = (e) => {

        setAddress(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value)

    }

    const handleDepartmentName = (e) => {
        let Name = e.target.value;
        if (Name.match('.*[0-9].*')) {
            setNameErr(true);
        }
        else {
            setNameErr(false);

        }
        setRole(Name);
    }
    const data =
    {

        firstName: firstName,
        lastName: lastName,
        address: address,
        contactNo: contactNo,
        email: email,
        gender: gender,
        role: role,
        password: password

    }
    const handleSubmit = (e) => {

        e.preventDefault();

        // HODServices.addHODRecords(data)
        axios.post("http://localhost:8080/HODlist", data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("tokenId")}`
            }
        })
            .then((res) => {
                console.log(res.data)
                alert("Hod successfully regestered")
                window.location.reload()
            })
            .catch((err) => {
                console.log(err)
            })





    }





    return (
        <div className="row justify-content-center ">

            <div className="row justify-content-center p-2 box-height">
                {/* <NavigationBar></NavigationBar> */}
                <br></br>
                <div className="col-6 align-self-center shadow-lg" style={{ backgroundColor: '#ebf2fa' }}>
                    <div className="row justify-content-center p-2">

                        <h2 className='textStyleHeading'>Create an account</h2>

                        <form className="form-inline" onSubmit={(e) => { handleSubmit(e) }}>
                            <div className='mb-3 row justify-content-center' >
                                <label className="col-sm-3 col-form-label">First Name</label>
                                <div className="col-sm-8">
                                    <input type="text" id="Fname" className="form-control form-control-lg" pattern="[A-Za-z\\s]*" title="Name is not proper" placeholder="Enter Name" required onChange={(e) => { handleFirstNameChange(e) }} />
                                    {/* {nameErr?<p className='text-danger'>Name should contain characters only</p>:""} */}
                                </div>
                            </div>

                            <div className='mb-3 row justify-content-center' >
                                <label className="col-sm-3 col-form-label">Last Name</label>
                                <div className="col-sm-8">
                                    <input type="text" id="Lname" className="form-control form-control-lg" pattern="[A-Za-z\\s]*" title="Name is not proper" placeholder="Enter Name" required onChange={(e) => { handleLastNameChange(e) }} />
                                    {/* {nameErr?<p className='text-danger'>Name should contain characters only</p>:""} */}
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
                                <label className="col-sm-3 col-form-label">Gender</label>
                                <div className="col-sm-8">
                                    <fieldset data-role="controlgroup">
                                        <label for="male" className="col-form-label">Male</label>
                                        <input type="radio" className="col-sm-2" name="gender" id="male" value="MALE" onChange={(e) => { handlerGenderChange(e) }} />
                                        <label for="female" className="col-form-label">Female</label>
                                        <input type="radio" className="col-sm-2" name="gender" id="female" value="FEMALE" onChange={(e) => { handlerGenderChange(e) }} />
                                    </fieldset>
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

                            {/* <div className='mb-3 row justify-content-center' >
                                <label className="col-sm-3 col-form-label">Department</label>
                                <div className="col-sm-8">
                                    <input type="text" id="Dname" className="form-control form-control-lg" pattern="[A-Za-z\\s]*" title="Name is not proper" placeholder="Enter Name" required onChange={(e) => { handleDepartmentName(e) }} />
                                </div>
                                </div> */}




                            <div className="mb-3 row justify-content-center mx-4">
                                <label className="col-sm-3 col-form-label">HOD Role : </label>
                                <div className="col-sm-8">

                                    <select className="form-control" name="payment" id="payment " required onChange={(e) => { handleDepartmentName(e) }} >
                                        <option value="dept" disabled selected>Select HOD</option>
                                        <option value="ROLE_HODCOMPLAINTS">ROLE_HODCOMPLAINTS</option>
                                        <option value="ROLE_HODSERVICES">ROLE_HODSERVICES</option>

                                    </select>
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

export default HODRegistration;
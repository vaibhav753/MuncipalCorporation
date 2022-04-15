import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../Addcss/formHeading.css'
import userlogin from '../../Services/LoginService'
import AuthenticationService from '../../Services/AuthenticationService';

const Login = () => {
    const [name, setName] = useState("");
    const [Role, setRole] = useState("");
    const [jwt, setJwt] = useState();
    const [password, setPassword] = useState("");

    const navigate = useNavigate();


    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }


    const data1 = {
        email: name,
        password: password
    }

    const registeredLoggedin = (e) => {
        e.preventDefault();
        console.log("After")
        userlogin.validateUser(data1).then((res) => {
            console.log(res.data);
            setRole(res.data.role)
            console.log(res.data.role)
            sessionStorage.setItem("role", res.data.role);
            sessionStorage.setItem("tokenId", res.data.token);
            sessionStorage.setItem("email", name);
            // AuthenticationService.storeUserDetails(res.data);
            if (res.data.role === "[ROLE_USER]") {
                navigate("/")
            }
            else if (res.data.role === "[ROLE_HODCOMPLAINTS]") {
                navigate("/hodhomepage")
            }
            else if (res.data.role === "[ROLE_ADMIN]") {
                navigate("/admin")
            }
            else if (res.data.role === "[ROLE_HODSERVICES]") {
                navigate("/HODOnlineServices")
            }

        })
            .catch((err) => {
                console.error(err);
            });

    }




    return (
        <div className="row justify-content-center box-height my-4">
            <div className="col-6" style={{ backgroundColor: '#ebf2fa' }}>
                <div className="row justify-content-center p-2 ">

                    <div className="align-self-center shadow-lg ">

                        <div className="row justify-content-center p-2">
                            <h2 className='textStyleHeading'> Login </h2>
                            <br></br>
                            <form onSubmit={(e) => registeredLoggedin(e)} className="form-inline" >
                                <div className="mb-3 row justify-content-center">
                                    <label className="col-sm-3 col-form-label">Enter Email : </label>
                                    <div className="col-sm-8">
                                        <input className='form-control' type="email" id="n1" value={name} name="name" placeholder="name@example.com" required onChange={(e) => { handleNameChange(e) }}></input>
                                    </div>
                                </div>

                                <div className="mb-3 row justify-content-center">
                                    <label className="col-sm-3 col-form-label">Enter Password : </label>
                                    <div className="col-sm-8">
                                        <input className='form-control' type="password" id="p1" value={password} name="pwd" required onChange={(e) => { handlePasswordChange(e) }}></input>
                                    </div>
                                </div>

                               
                                <div className='mx-4'>
                                    Don't have an account? Create an account <a href="/registration">here</a>
                                </div>

                                <div className='wraper'>   <input type="submit" value="Submit" className='btn btn-primary btn-lg' id="submitbutton" /></div>

                                {/* <button onClick={(e) => registeredLoggedin(e)}>test</button> */}
                                </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Login;
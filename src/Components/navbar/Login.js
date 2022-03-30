// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../Addcss/Card.css'
import '../Addcss/Background.css';
import NavigationBar from './NavigationBar';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import HomePage from '../HomePage';
import '../Addcss/formHeading.css'

const Login = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    var users = [{ "name": "tanvee", "password": "123", "type": "user" }, { "name": "sayali", "password": "123", "type": "hodOnlineServices" }, { "name": "darshan", "password": "123", "type": "hodComplaints" }]
    const navigate = useNavigate();
    var type;
    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const registeredLoggedin = (e) => {
        e.preventDefault();

        for (var i = 0; i < users.length; i++) {
            if (users[i].name == name && users[i].password == password) {

                type = users[i].type;
                console.log(type);
            }
        }
        alert(type)
        if (type == "user")
            navigate('/');
        else if (type == "hodOnlineServices")
            navigate('/HODOnlineServices')
        else
            navigate('/hodhomepage')
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
                                        <input className='form-control' type="text" id="n1" value={name} name="name" required onChange={(e) => { handleNameChange(e) }}></input>
                                    </div>
                                </div>

                                <div className="mb-3 row justify-content-center">
                                    <label className="col-sm-3 col-form-label">Enter Password : </label>
                                    <div className="col-sm-8">
                                        <input className='form-control' type="password" id="p1" value={password} name="pwd" required onChange={(e) => { handlePasswordChange(e) }}></input>
                                    </div>
                                </div>

                                <div className="mb-3 row mx-2">
                                    <label className="col-sm-4 col-form-label">
                                        <input className="form-check-input mx-2" type='checkbox' id="p1" name="pwd"></input>
                                        Remember me </label>

                                </div>
                                <div className='mx-4'>
                                    Don't have an account? Create an account <a href="/registration">here</a>
                                </div>
                                <br></br>
                                <div className='wraper'>   <input type="submit" value="Submit" className='btn btn-primary btn-lg' id="submitbutton" /></div>
                                <br />
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Login;
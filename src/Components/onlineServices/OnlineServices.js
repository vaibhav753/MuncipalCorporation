import React from 'react'
import image from '../Images/Muncipal.jpg';
import birth from '../Images/birth.png'
import marriage from '../Images/marriage.png'
import death from '../Images/death.png'
import { BiWallet, BiPencil, BiMenu } from "react-icons/bi";
import {AiFillFileText} from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';


const OnlineServices = () => {

        const navigate = useNavigate();
    
        const marriageRegistration = (e) => {
            e.preventDefault();
            navigate('/marriageRegistration');
        }
    
        const birthRegistration = (e) => {
            e.preventDefault();
            navigate('/birthRegistration');
        }
        const deathRegistration = (e) => {
            e.preventDefault();
            navigate('/deathRegistration');
        }
       
  return (
     <div className="row justify-content-center box-height my-4 ">
    <div className="col-10 align-self-center shadow-lg" >
    <div className="container"  style={{marginTop:"5vh"}}>
        <div className="row text-center g-4 ">

            <div className="col-md">
                <div className="card zoom bg-dark text-light"  >
                    <div className="card-body text-center" id="card">
                        <div className="h1 mb-3">
                            {/* <i className="bi bi-laptop"></i> */}
                            <img src={birth} className="img1" width="150px" height="150px"/>
                        </div>
                        <h3 className="card-title mb-3">Birth Registration</h3>
                        
                        {/* <a href="#" className="btn btn-primary">Register</a> */}
                        <button onClick={(e) => birthRegistration(e)} className="btn btn-primary" id='submitbutton'>Register</button>

                    </div>
                </div>
            </div>

            <div className="col-md">
                <div className="card zoom bg-dark text-light">
                    <div className="card-body text-center"  id="card">
                        <div className="h1 mb-3">
                            {/* <i className="bi bi-filter-square"></i> */}
                            <img src={marriage} width="150px" height="150px"/>
                        </div>
                        <h3 className="card-title mb-3">Marriage Registration </h3>
                        
                        <button onClick={(e) => marriageRegistration(e)} className="btn btn-primary" id='submitbutton'>Register</button>
                    </div>
                </div>
            </div>

            <div className="col-md ">
                <div className="card zoom bg-dark text-light">
                    <div className="card-body text-center"  id="card">
                        <div className="h1 mb-3">
                            <img src={death} width="150px" height="150px"/>
                        </div>
                        <h3 className="card-title mb-3">Death Registration</h3>
                        
                        {/* <a href="#" className="btn btn-primary">Click here</a> */}
                        <button onClick={(e) => deathRegistration(e)} className="btn btn-primary" id='submitbutton'>Register</button>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>

        
</div>
  )
}

export default OnlineServices;
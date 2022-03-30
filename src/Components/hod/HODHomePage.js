import image from '../Images/Muncipal.jpg';
import certificate from '../Images/Muncipal.jpg';
import { BiWallet, BiPencil, BiMenu, BiHourglass, BiCheck, BiTrash, BiX } from "react-icons/bi";
import {AiFillFileText} from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import Onlineservices from '../onlineServices/OnlineServices';
import BirthRegistration from '../onlineServices/BirthRegistration'
import i1 from '../Images/Muncipal.jpg'
import i2 from '../Images/2.jpg'
import i3 from '../Images/3.jpg'
import i4 from '../Images/4.jpg'
import i5 from '../Images/5.jpg'

import "../Addcss/HomePage.css";

const HODHomePage = () => {
    const navigate = useNavigate();

    const registeredComplaint = (e) => {
        e.preventDefault();
        navigate('/complaintslist');
    }


    const makePayment = (e) => {
        e.preventDefault();
        navigate('/complaintsrejectedlist');
    }
    const olServices = (e) => {
        e.preventDefault();
        navigate('/complaintscompletedlist');
    }
    return (
        <body>
            <div className='container-fluid'>
                    <div className="container card-img-overlay">
                        <div className="d-sm-flex align-items-center justify-content-between">
                            <div>
                                
                               
                                {/* <!-- <button className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#enroll">
                                    Start The Enrollment
                                </button> --> */}
                            </div>
                            {/* <img className="img-fluid" src={image} alt="" /> */}
                        </div>
                    </div>
                    
               {/*  </section> */}



                {/* <!-- Boxes --> */}
                <section className="p-4 my-8">
                    <div className="container">
                        <div className="row text-center g-4 my-4">

                            <div className="col-md">
                                <div className="card zoom "  id="card">
                                    <div className="card-body text-center">
                                        <div className="h1 mb-3">
                                            {/* <i className="bi bi-laptop"></i> */}
                                            <BiHourglass />
                                           
                                        </div>
                                        <h3 className="card-title mb-3">Pending Complaints</h3>
                                        <p className="card-text">
                                            Total Number
                                        </p>
                                        {/* <a href="#" className="btn btn-primary">Register</a> */}
                                        <button onClick={(e) => registeredComplaint(e)} className="btn btn-primary" style={{backgroundColor:'silver',color:'black',fontWeight:'bold'}}>Click here</button>

                                    </div>
                                </div>
                            </div>

                            <div className="col-md">
                                <div className="card zoom " id="card">
                                    <div className="card-body text-center">
                                        <div className="h1 mb-3">
                                            {/* <i className="bi bi-filter-square"></i> */}
                                            <BiCheck />
                                        </div>
                                        <h3 className="card-title mb-3">Complaints Completed</h3>
                                        <p className="card-text">
                                           Total Number
                                        </p>
                                        <button onClick={(e) => olServices(e)} className="btn btn-primary" style={{backgroundColor:'silver',color:'black',fontWeight:'bold'}}>Click here</button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md">
                                <div className="card zoom"  id="card">
                                    <div className="card-body text-center">
                                        <div className="h1 mb-3">
                                            <BiX></BiX>
                                        </div>
                                        <h3 className="card-title mb-3">Complaints Rejected</h3>
                                        <p className="card-text">
                                                Total Number
                                        </p>
                                        {/* <a href="#" className="btn btn-primary">Click here</a> */}
                                        <button onClick={(e) => makePayment(e)} className="btn btn-primary" style={{backgroundColor:'silver',color:'black',fontWeight:'bold'}}>Click here</button>
                                    </div>
                                </div>
                                <span></span><span></span>

                            
                            </div>
                           
                        </div>
                        
                    </div>
                </section>
            </div>


           



        </body>
    )
}

export default HODHomePage;  
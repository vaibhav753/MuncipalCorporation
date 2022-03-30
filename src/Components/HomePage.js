import image from '../Images/Muncipal.jpg';
import certificate from '../Images/Muncipal.jpg';
import { BiWallet, BiPencil, BiMenu } from "react-icons/bi";
import {AiFillFileText} from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import Onlineservices from './onlineServices/OnlineServices';
import BirthRegistration from './onlineServices/BirthRegistration'
import i1 from '../Images/Muncipal.jpg'
import i2 from '../Images/2.jpg'
import i3 from '../Images/3.jpg'
import i4 from '../Images/4.jpg'
import i5 from '../Images/5.jpg'
import "../Components/Addcss/HomePage.css";
import './Addcss/card.css'
const HomePage = () => {
    const navigate = useNavigate();

    const registeredComplaint = (e) => {
        e.preventDefault();
        navigate('/complaints');
    }


    const makePayment = (e) => {
        e.preventDefault();
        navigate('/newpayment');
    }
    const olServices = (e) => {
        e.preventDefault();
        navigate('/onlineservices');
    }
    return (
        <body>
            <div className='container-fluid'>
                 <div><p className="lead my-1 slide-left" style={{fontFamily:'Verdana',fontWeight:'bold',fontSize:"34px"}}>
                                    Welcome to Mumbai Municipal Corporation
                                </p></div>
               
                <div className="b10" ></div>
                {/* <section className="text-light p-5 p-lg-0 text-center text-sm-start"> */}
                
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
                <section className="p-4 my-2">
                    <div className="container">
                        <div className="row text-center g-4 mb-5">

                            <div className="col-md">
                                <div className="card zoom" id="card">
                                    <div className="card-body text-center">
                                        <div className="h1 mb-3">
                                            {/* <i className="bi bi-laptop"></i> */}
                                            <BiPencil />
                                        </div>
                                        <h3 className="card-title mb-3">Complaints</h3>
                                        <p className="card-text">
                                            Register Complaints
                                        </p>
                                        {/* <a href="#" className="btn btn-primary">Register</a> */}
                                        <button onClick={(e) => registeredComplaint(e)} className="btn btn-primary" id='submitbutton'>Register here</button>

                                    </div>
                                </div>
                            </div>

                            <div className="col-md">
                                <div className="card zoom " id="card">
                                    <div className="card-body text-center">
                                        <div className="h1 mb-3">
                                            {/* <i className="bi bi-filter-square"></i> */}
                                            <AiFillFileText />
                                        </div>
                                        <h3 className="card-title mb-3">Services</h3>
                                        <p className="card-text">
                                           Apply for online services
                                        </p>
                                        <button onClick={(e) => olServices(e)} className="btn btn-primary" id='submitbutton'>Click here</button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md">
                                <div className="card zoom" id="card">
                                    <div className="card-body text-center">
                                        <div className="h1 mb-3">
                                            <BiWallet />
                                        </div>
                                        <h3 className="card-title mb-3">Payment</h3>
                                        <p className="card-text">
                                            For Your payment
                                        </p>
                                        {/* <a href="#" className="btn btn-primary">Click here</a> */}
                                        <button onClick={(e) => makePayment(e)} className="btn btn-primary"id='submitbutton'>Click here</button>
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

export default HomePage;  
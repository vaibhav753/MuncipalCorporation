
import { BiWallet, BiPencil, BiMap } from "react-icons/bi";
import { AiFillFileText } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

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

    const covidTracker = (e) => {
        e.preventDefault();
        navigate('/covidTracker');
    }
    return (
        <body>
            <div className='container-fluid'>


                <div className="b10 my-4" >
                    <div><p className="lead my-1 slide-left" style={{ fontFamily: 'Verdana', fontWeight: 'bold', fontSize: "34px" }}>
                        Welcome to Mumbai Municipal Corporation
                    </p></div>
                </div>

                {/* <!-- Boxes --> */}
                <section className="p-4 my-2">
                    <div className="container my-5">
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
                                        <button onClick={(e) => makePayment(e)} className="btn btn-primary" id='submitbutton'>Click here</button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md">
                                <div className="card zoom" id="card">
                                    <div className="card-body text-center">
                                        <div className="h1 mb-3">
                                            <BiMap />
                                        </div>
                                        <h3 className="card-title mb-3">Covid-Tracker</h3>
                                        <p className="card-text">
                                            World-Wide Tracker
                                        </p>
                                        {/* <a href="#" className="btn btn-primary">Click here</a> */}
                                        <button onClick={covidTracker} className="btn btn-primary" id='submitbutton'>Click here</button>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
                </section>
            </div>






        </body>
    )
}

export default HomePage;  
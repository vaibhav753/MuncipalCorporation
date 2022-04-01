import image from '../Images/Muncipal.jpg';
import certificate from '../Images/Muncipal.jpg';
import { BiWallet, BiPencil, BiMenu, BiHourglass, BiCheck, BiTrash, BiX } from "react-icons/bi";
import { AiFillFileText } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import Onlineservices from '../onlineServices/OnlineServices';
import BirthRegistration from '../onlineServices/BirthRegistration'


import "../Addcss/HomePage.css";

const HODOnlineServices = () => {
    const navigate = useNavigate();

    const UnverifiedForm = (e) => {
        e.preventDefault();
        navigate('/uvlist');
    }


    const VerifiedForms = (e) => {
        e.preventDefault();
        navigate('/vlist');
    }
    const rejectedForms = (e) => {
        e.preventDefault();
        navigate('/rejectedlist');
    }
    return (
        <body>
            <div className='container-fluid'>
                <section className="p-4 my-8">
                    <div className="container">
                        <div className="row text-center g-4 my-4">

                            <div className="col-md">
                                <div className="card zoom " id="card">
                                    <div className="card-body text-center">
                                        <div className="h1 mb-3">
                                            <BiHourglass />

                                        </div>
                                        <h3 className="card-title mb-3">Unverified Forms</h3>
                                        <p className="card-text">
                                            Total Number
                                        </p>

                                        <button onClick={(e) => UnverifiedForm(e)} className="btn btn-primary" style={{ backgroundColor: 'silver', color: 'black', fontWeight: 'bold' }}>Click here</button>

                                    </div>
                                </div>
                            </div>

                            <div className="col-md">
                                <div className="card zoom " id="card">
                                    <div className="card-body text-center">
                                        <div className="h1 mb-3">

                                            <BiCheck />
                                        </div>
                                        <h3 className="card-title mb-3">Verified Forms</h3>
                                        <p className="card-text">
                                            Total Number
                                        </p>
                                        <button onClick={(e) => VerifiedForms(e)} className="btn btn-primary" style={{ backgroundColor: 'silver', color: 'black', fontWeight: 'bold' }}>Click here</button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md">
                                <div className="card zoom" id="card">
                                    <div className="card-body text-center">
                                        <div className="h1 mb-3">
                                            <BiX></BiX>
                                        </div>
                                        <h3 className="card-title mb-3">Rejected Forms</h3>
                                        <p className="card-text">
                                            Total Number
                                        </p>

                                        <button onClick={(e) => rejectedForms(e)} className="btn btn-primary" style={{ backgroundColor: 'silver', color: 'black', fontWeight: 'bold' }}>Click here</button>
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

export default HODOnlineServices;  
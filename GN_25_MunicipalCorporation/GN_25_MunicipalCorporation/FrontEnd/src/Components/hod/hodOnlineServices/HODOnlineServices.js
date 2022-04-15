import image from '../../Images/Muncipal.jpg';
import certificate from '../../Images/Muncipal.jpg';
import { BiWallet, BiPencil, BiMenu, BiHourglass, BiCheck, BiTrash, BiX } from "react-icons/bi";
import { AiFillFileText } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import Onlineservices from '../../onlineServices/OnlineServices';

import "../../Addcss/HomePage.css";
import { useState } from 'react';

const HODOnlineServices = () => {
    const [olService, setOlService]=useState('');
    const handleOLServiceChange=(e)=>{
        setOlService(e.target.value);
    }
    const navigate = useNavigate();

    const UnverifiedForm = (e) => {
        e.preventDefault();
        if(olService=="birthRegistration"){
        navigate('/birthRegistration/uvlist');}
        else if(olService=="deathRegistration"){
            navigate('/deathRegistration/uvlist');}
            else if(olService=="marriageRegistration"){
                navigate('/marriageRegistration/uvlist');}
    }


    const VerifiedForms = (e) => {
        e.preventDefault();
        if(olService=="birthRegistration"){
            navigate('/birthRegistration/vlist');}
            else if(olService=="deathRegistration"){
                navigate('/deathRegistration/vlist');}
                else if(olService=="marriageRegistration"){
                    navigate('/marriageRegistration/vlist');}
    }
    const rejectedForms = (e) => {
        e.preventDefault();
        if(olService=="birthRegistration"){
            navigate('/birthRegistration/rejectedlist');}
            else if(olService=="deathRegistration"){
                navigate('/deathRegistration/rejectedlist');}
                else if(olService=="marriageRegistration"){
                    navigate('/marriageRegistration/rejectedlist');}
    }
    
    return (
        <body>
           
            <div className='container-fluid'>
            <div className="textStyleHeading my-3">
            <label className="col-sm-3 col-form-label align-centre">Select Department</label>
            <select className=" my-3" name="OLService" id="OLService" required onChange={(e) => { handleOLServiceChange(e) }}>
                                        <option value="OLService" disabled selected>Online Service</option>
                                        <option value="birthRegistration">Birth Registration</option>
                                        <option value="deathRegistration">Death Registration</option>
                                        <option value="marriageRegistration">Marriage Registration</option>
                                    </select>
            </div>
                <section className="p-4 my-4">
                    <div className="container">
                        <div className="row text-center g-4 my-4">

                            <div className="col-md">
                                <div className="card zoom " id="card">
                                    <div className="card-body text-center">
                                        <div className="h1 mb-3">
                                            <BiHourglass />

                                        </div>
                                        <h3 className="card-title mb-3">Unverified Forms</h3>
                                        

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
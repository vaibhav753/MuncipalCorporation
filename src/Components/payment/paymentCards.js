import React from 'react'
import image from '../Images/Muncipal.jpg';
import birth from '../Images/birth.png'
import marriage from '../Images/marriage.png'
import death from '../Images/death.png'
import { BiWallet, BiPencil, BiMenu } from "react-icons/bi";
import { AiFillFileText } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';


const paymentCard = () => {

    const navigate = useNavigate();

    const waterBill = (e) => {
        e.preventDefault();
        navigate('/waterBill');
    }

    const propertyTax = (e) => {
        e.preventDefault();
        navigate('/propertyTax');
    }
   

    return (
        <div className="row justify-content-center box-height my-5 ">
            <div className="col-10 align-self-center shadow-lg" >
                <div className="container-fluid" style={{ marginTop: "5vh", marginBottom: "5vh" }}>
                    <div className="row text-center g-4 ">

                        <div className="col-md">
                            <div className="card zoom bg-dark text-light"  >
                                <div className="card-body text-center" id="card">
                                    <div className="h1 mb-3">
                                        {/* <i className="bi bi-laptop"></i> */}
                                        <img src={birth} className="img1" width="150px" height="150px" />
                                    </div>
                                    <h3 className="card-title mb-3">Birth Registration</h3>

                                    {/* <a href="#" className="btn btn-primary">Register</a> */}
                                    <button onClick={(e) => propertyTax(e)} className="btn btn-primary" id='submitbutton'>Register</button>

                                </div>
                            </div>
                        </div>

                        <div className="col-md">
                            <div className="card zoom bg-dark text-light">
                                <div className="card-body text-center" id="card">
                                    <div className="h1 mb-3">
                                        {/* <i className="bi bi-filter-square"></i> */}
                                        <img src={marriage} width="150px" height="150px" />
                                    </div>
                                    <h3 className="card-title mb-3">Marriage Registration </h3>

                                    <button onClick={(e) => waterBill(e)} className="btn btn-primary" id='submitbutton'>Register</button>
                                </div>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>


        </div>
    )
}

export default paymentCard;
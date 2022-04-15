import * as React from "react";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {ReactSession} from 'react-client-session';
import axios from 'axios';
import PropertyService from '../../Services/PropertyService';


const NewPayment = () => {

    const [paymentType, setPayment] = useState("");
    const [conNum, setConNum] = useState("");
    
    const navigate = useNavigate();

    const setPaymentType = (e) => {
        setPayment(e.target.value)
    }

    const setConNumber = (e) => {
        setConNum(e.target.value)
    }

    const navigatePayment = (e) => {
        e.preventDefault();
        
        if (paymentType == "waterR")
            navigate('/water');
        else if (paymentType == "propertyR")
            navigate('/property')
        else
            navigate('/newpayment')
    }

    const navigatePaymentByConNo = (e) => {
        e.preventDefault();
        ReactSession.set("consumerNo", conNum);
        ReactSession.set("paymentType", paymentType);
        
        
            if (paymentType == "waterR"){
                navigate('/water/'+conNum);
            }
            else if (paymentType == "propertyR")
                navigate('/property/'+conNum);
            else
                navigate('/newpayment');
    }

    
    
    const navigatePaymentByEmail = (e) => {
        e.preventDefault();
        // ReactSession.set("consumerNo", conNum);
        ReactSession.set("paymentType", paymentType);
        const curConNo = ReactSession.get("curConNo");
        console.log(curConNo, paymentType);
        
            if (paymentType == "waterR"){
                navigate('/water/'+curConNo);
            }
            else if (paymentType == "propertyR")
                navigate('/property/'+curConNo);
            else
                navigate('/newpayment');
    }
    
    
    return (
        <div>
        <div className="row justify-content-center box-height my-4">

            <div className="col-9 align-self-center shadow-lg" style={{ backgroundColor: '#ebf2fa' }} >
                <div className="row justify-content-center p-2">
                    < h2 style={{ textAlign: "center", fontFamily: 'Vedana', fontWeight: 'bold' }}>Make payment </h2>
                </div>
                <form className="form-inline" onSubmit={(e) => navigatePaymentByConNo(e)}>
                    <div >
                       
                        <div className="mb-3 row justify-content-center mx-4">
                                <label className="col-sm-3 col-form-label">Department : </label>
                                <div className="col-sm-8">
                            
                                <select className="form-control" name="payment" id="payment " required onChange={(e) => { setPaymentType(e) }} >
                                    <option value="day" disabled selected>Select Department</option>
                                    <option value="waterR">water</option>
                                    <option value="propertyR">property</option>

                                </select>
                                </div>
                        </div>

                        <div className="border border-2 p-1">
                            <div className="mb-3 row justify-content-center mx-4">
                                <label className="col-sm-3 col-form-label" >
                                    Enter consumer No :
                                </label>
                                <div className="col-sm-8">
                                    <input className="form-control" type="text" id="conId" value={conNum} name="conNum" onChange={(e) => { setConNumber(e) }} /><br />
                                </div>
                            </div>

                            <center>
                            <div className='wraper'>   <input type="submit" value="Submit" className='btn btn-light' style={{ backgroundColor: 'silver', color: 'black', fontWeight: 'bold' }}  /> <input type="button" value="Clear" className='btn btn-light' style={{ backgroundColor: 'silver', color: 'black', fontWeight: 'bold' }} /></div>
                            &emsp;&emsp;
                           
                            <div className='wraper'>   </div>
                            </center>

                            
                        </div>

                            <center><p>OR</p></center>
                         
                            <center><div className='wraper'>   <input type="submit" value="Go With Current Consumer" className='btn btn-primary' style={{ backgroundColor: 'silver', color: 'black', fontWeight: 'bold' }} onClick={(e) => navigatePaymentByEmail(e)} /></div></center>
                            
                    </div>
                    
                </form>
            </div>
        </div>
        
        </div>

    )
}

export default NewPayment;
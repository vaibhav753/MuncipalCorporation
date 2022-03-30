import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '../../App.css';
import "../Addcss/Complaint.css";



function MarriageRegistration() {
    const [hName, setHName] = useState('');
    const [hReligion, setHReligion] = useState('');
    const [hDob, setHDob] = useState('');
    const [hMStatus, setHMStatus] = useState('');
    const [hAdderss, setHAddress] = useState('');
    const [hIdProof, setHIdproof] = useState('');
    const [hIdNo, setHIdNo] = useState('');
    const [wName, setWName] = useState('');
    const [wReligion, setWReligion] = useState('');
    const [wDob, setWDob] = useState('');
    const [wMStatus, setWMStatus] = useState('');
    const [wAdderss, setWAddress] = useState('');
    const [wIdProof, setWIdproof] = useState('');
    const [wIdNo, setWIdNo] = useState('');
    const [w1Name, setW1Name] = useState('');
    const [w1Adderss, setW1Address] = useState('');
    const [w1IdProof, setW1Idproof] = useState('');
    const [w1IdNo, setW1IdNo] = useState('');
    const [w2Name, setW2Name] = useState('');
    const [w2Adderss, setW2Address] = useState('');
    const [w2IdProof, setW2Idproof] = useState('');
    const [w2IdNo, setW2IdNo] = useState('');

    const handleHNameChange = (e) => {
        setHName(e.target.value);
    }
    const handleHReligionChange = (e) => {
        setHReligion(e.target.value);
    }

    const handleHDobChange = (e) => {
        setHDob(e.target.value);
    }
    const handleHMStatusChange = (e) => {
        setHMStatus(e.target.value);
    }

    const handleHAddressChange = (e) => {
        setHAddress(e.target.value);
    }
    const handleHIdProofChange = (e) => {
        setHIdproof(e.target.value)
    }
    const handleHIdNoChange = (e) => {
        setHIdNo(e.target.value)
    }
    const handleWNameChange = (e) => {
        setWName(e.target.value);
    }
    const handleWReligionChange = (e) => {
        setWReligion(e.target.value);
    }

    const handleWDobChange = (e) => {
        setWDob(e.target.value);
    }
    const handleWMStatusChange = (e) => {
        setWMStatus(e.target.value);
    }

    const handleWAddressChange = (e) => {
        setWAddress(e.target.value);
    }
    const handleWIdProofChange = (e) => {
        setWIdproof(e.target.value)
    }
    const handleWIdNoChange = (e) => {
        setWIdNo(e.target.value)
    }
    const handleW1NameChange = (e) => {
        setW1Name(e.target.value);
    }
    const handleW1AddressChange = (e) => {
        setW1Address(e.target.value);
    }
    const handleW1IdProofChange = (e) => {
        setW1Idproof(e.target.value)
    }
    const handleW1IdNoChange = (e) => {
        setW1IdNo(e.target.value)
    }
    const handleW2NameChange = (e) => {
        setW1Name(e.target.value);
    }
    const handleW2AddressChange = (e) => {
        setW1Address(e.target.value);
    }
    const handleW2IdProofChange = (e) => {
        setW1Idproof(e.target.value)
    }
    const handleW2IdNoChange = (e) => {
        setW1IdNo(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('A form was submitted with Name :"' + hName + " " + wName);
        console.log(hName + " " + wName);


    }


    return (
        <div>
            <div className="row justify-content-center box-height" >

                <div className="col-9 align-self-center shadow-lg" style={{ backgroundColor: '#ebf2fa' }} >
                    <div className="row justify-content-center p-2 "><h2 className='textStyleHeading'>Marriage Registration Form</h2></div>
                    <form className="form-inline" onSubmit={(e) => { handleSubmit(e) }}>

                        <div className="border border-2 p-1" /* style={{backgroundColor:'teal'}} */>
                            <div className='row justify-content-center '> <h3 /* className='p-2 rounded'style={{ textAlign:"center",backgroundColor:"#3d5a80",width:"250px" }} */ style={{ fontFamily: 'Verdana', textAlign: "center" }}>Husband Details</h3></div>
                            <div className="mb-3 row justify-content-center">
                                <label className="col-sm-3 col-form-label">Name of husband</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" value={hName} required onChange={(e) => { handleHNameChange(e) }} />
                                </div>
                            </div>


                            <div className="mb-3 row mx-4 ">
                                <label className="col-sm-3 col-form-label">Religion</label>
                                <div className="col-sm-4 mx-4">
                                    <input type="text" className="form-control" name="hReligion" value={hReligion} required onChange={(e) => handleHReligionChange(e)} />
                                </div>
                            </div>


                            <div className="mb-3 row mx-4">
                                <label className="col-sm-3 col-form-label">Date of Birth</label>
                                <div className="col-sm-4 mx-4">

                                    <input className="form-control" type="date" value={hDob} name="hDob" required onChange={(e) => { handleHDobChange(e) }} />
                                </div>
                            </div>



                            <div className="mb-3 row mx-4">
                                <label className="col-sm-3 col-form-label">Marital status</label>
                                <div className="col-sm-4 mx-4">
                                    <select className="form-control" name="mStatus" required onChange={(e) => { handleHMStatusChange(e) }}>
                                        <option value="select marital status" disabled selected>Select Marital Status</option>
                                        <option value="bachelor">Bachelor</option>
                                        <option value="widow">Widow</option>
                                        <option value="divorcee">Divorcee</option>

                                    </select>
                                </div>
                            </div>



                            <div className="mb-3 row justify-content-center">
                                <label className="col-sm-3 col-form-label">Address </label>
                                <div className="col-sm-8">
                                    {/* <input className="form-control" type="text" value={adderss} required onChange={(e) => { handleAddressChange(e) }} /> */}
                                    <textarea className="form-control" type="text" value={hAdderss} required onChange={(e) => { handleHAddressChange(e) }} />
                                </div>
                            </div>


                            <div className="mb-3 row mx-4">
                                <label className="col-sm-3 col-form-label">Id Proof</label>
                                <div className="col-sm-4 mx-4">
                                    <select className="form-control" name="hIdProof" required onChange={(e) => { handleHIdProofChange(e) }}>
                                        <option value="select id proof" disabled selected>Select Id Proof</option>
                                        <option value="aadhar_Card">Aadhar Card</option>
                                        <option value="pan_card">Pan Card</option>
                                        <option value="passport">PassPort</option>

                                    </select>
                                </div>
                            </div>

                            <div className="mb-3 row mx-4">
                                <label className="col-sm-3 col-form-label">Id Number</label>
                                <div className="col-sm-4 mx-4">
                                    <input type="text" className="form-control" value={hIdNo} name="hIdNO" required onChange={(e) => { handleHIdNoChange(e) }} />
                                </div>
                            </div>

                        </div>

                        <br></br>
                        <div className="border border-2 p-1" >
                            <div className='row justify-content-center '> <h3 className='p-2 rounded' id="heading">Wife Details</h3></div>
                            <div className="mb-3 row justify-content-center">
                                <label className="col-sm-3 col-form-label">Name of Wife</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" value={wName} required onChange={(e) => { handleWNameChange(e) }} />
                                </div>
                            </div>



                            <div className="mb-3 row mx-4 ">
                                <label className="col-sm-3 col-form-label">Religion</label>
                                <div className="col-sm-4 mx-4">
                                    <input type="text" className="form-control" name="wReligion" value={wReligion} required onChange={(e) => handleHReligionChange(e)} />
                                </div>
                            </div>



                            <div className="mb-3 row mx-4">
                                <label className="col-sm-3 col-form-label">Date of Birth</label>
                                <div className="col-sm-4 mx-4">

                                    <input className="form-control" type="date" value={wDob} name="wDob" required onChange={(e) => { handleHDobChange(e) }} />
                                </div>
                            </div>


                            <div className="mb-3 row mx-4">
                                <label className="col-sm-3 col-form-label">Marital status</label>
                                <div className="col-sm-4 mx-4">
                                    <select className="form-control" name="wStatus" required onChange={(e) => { handleHMStatusChange(e) }}>
                                        <option value="select marital status" disabled selected>Select Marital Status</option>
                                        <option value="bachelor">Bachelor</option>
                                        <option value="widow">Widow</option>
                                        <option value="divorcee">Divorcee</option>

                                    </select>
                                </div>
                            </div>




                            <div className="mb-3 row justify-content-center">
                                <label className="col-sm-3 col-form-label">Address </label>
                                <div className="col-sm-8">
                                    {/* <input className="form-control" type="text" value={adderss} required onChange={(e) => { handleAddressChange(e) }} /> */}
                                    <textarea className="form-control" type="text" value={wAdderss} required onChange={(e) => { handleHAddressChange(e) }} />
                                </div>
                            </div>



                            <div className="mb-3 row mx-4">
                                <label className="col-sm-3 col-form-label">Id Proof</label>
                                <div className="col-sm-4 mx-4">
                                    <select className="form-control" name="wIdProof" required onChange={(e) => { handleHIdProofChange(e) }}>
                                        <option value="select id proof" disabled selected>Select Id Proof</option>
                                        <option value="aadhar_Card">Aadhar Card</option>
                                        <option value="pan_card">Pan Card</option>
                                        <option value="passport">PassPort</option>

                                    </select>
                                </div>
                            </div>


                            <div className="mb-3 row mx-4">
                                <label className="col-sm-3 col-form-label">Id Number</label>
                                <div className="col-sm-4 mx-4">
                                    <input type="text" className="form-control" value={wIdNo} name="hIdNO" required onChange={(e) => { handleHIdNoChange(e) }} />
                                </div>
                            </div>

                        </div>
                        <br />
                        <div className="border border-2 p-1" >
                            <div className='row justify-content-center '> <h3 className='p-2 rounded' id="heading">Witness 1 Details</h3></div>
                            <div className="mb-3 row justify-content-center">
                                <label className="col-sm-3 col-form-label">Name:</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" value={w1Name} required onChange={(e) => { handleW1NameChange(e) }} />
                                </div>
                            </div>


                            <div className="mb-3 row justify-content-center">
                                <label className="col-sm-3 col-form-label">Address </label>
                                <div className="col-sm-8">
                                    {/* <input className="form-control" type="text" value={adderss} required onChange={(e) => { handleAddressChange(e) }} /> */}
                                    <textarea className="form-control" type="text" value={w1Adderss} required onChange={(e) => { handleHAddressChange(e) }} />
                                </div>
                            </div>



                            <div className="mb-3 row mx-4">
                                <label className="col-sm-3 col-form-label">Id Proof</label>
                                <div className="col-sm-4 mx-4">
                                    <select className="form-control" name="w1IdProof" required onChange={(e) => { handleHIdProofChange(e) }}>
                                        <option value="select id proof" disabled selected>Select Id Proof</option>
                                        <option value="aadhar_Card">Aadhar Card</option>
                                        <option value="pan_card">Pan Card</option>
                                        <option value="passport">PassPort</option>

                                    </select>
                                </div>
                            </div>


                            <div className="mb-3 row mx-4">
                                <label className="col-sm-3 col-form-label">Id Number</label>
                                <div className="col-sm-4 mx-4">
                                    <input type="text" className="form-control" value={w1IdNo} name="hIdNO" required onChange={(e) => { handleHIdNoChange(e) }} />
                                </div>
                            </div>


                        </div>
                        <br />
                        <div className="border border-2 p-1">
                            <div className='row justify-content-center '> <h3 className='p-2 rounded' id="heading">Witness 2 Details</h3></div>
                            <div className="mb-3 row justify-content-center">
                                <label className="col-sm-3 col-form-label">Name:</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" value={w2Name} required onChange={(e) => { handleW2NameChange(e) }} />
                                </div>
                            </div>






                            <div className="mb-3 row justify-content-center">
                                <label className="col-sm-3 col-form-label">Address </label>
                                <div className="col-sm-8">
                                    {/* <input className="form-control" type="text" value={adderss} required onChange={(e) => { handleAddressChange(e) }} /> */}
                                    <textarea className="form-control" type="text" value={w2Adderss} required onChange={(e) => { handleHAddressChange(e) }} />
                                </div>
                            </div>



                            <div className="mb-3 row mx-4">
                                <label className="col-sm-3 col-form-label">Id Proof</label>
                                <div className="col-sm-4 mx-4">
                                    <select className="form-control" name="w2IdProof" required onChange={(e) => { handleHIdProofChange(e) }}>
                                        <option value="select id proof" disabled selected>Select Id Proof</option>
                                        <option value="aadhar_Card">Aadhar Card</option>
                                        <option value="pan_card">Pan Card</option>
                                        <option value="passport">PassPort</option>

                                    </select>
                                </div>
                            </div>


                            <div className="mb-3 row mx-4">
                                <label className="col-sm-3 col-form-label">Id Number</label>
                                <div className="col-sm-4 mx-4">
                                    <input type="text" className="form-control" value={w2IdNo} name="hIdNO" required onChange={(e) => { handleHIdNoChange(e) }} />
                                </div>
                            </div>

                        </div>
                        <br />
                        <div className='wraper'>   <input type="submit" value="Submit" className='btn  btn-lg' id='submitbutton' /></div>
                        <br />
                    </form>
                </div></div>

        </div>
    );
}

export default MarriageRegistration;
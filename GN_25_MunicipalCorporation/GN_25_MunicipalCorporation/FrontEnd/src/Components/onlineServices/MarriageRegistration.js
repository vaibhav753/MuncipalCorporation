import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import '../../App.css';
import "../Addcss/Complaint.css";
import ImageUploading from 'react-images-uploading';
import { useNavigate } from 'react-router-dom';
import { BiUpload } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai"
import { useForm } from "react-hook-form";
function MarriageRegistration() {
    const navigate = useNavigate();
    const mail = sessionStorage.getItem('email');

    const [hName, setHName] = useState('');
    const [hNameErr, setHNameErr] = useState(false);
    const [hReligion, setHReligion] = useState('');
    const [hReligionErr, setHReligionErr] = useState(false);
    const [hDob, setHDob] = useState('');
    const [hdobErr, setHDobErr] = useState(false);
    const [hMStatus, setHMStatus] = useState('');
    const [hAdderss, setHAddress] = useState('');
    const [hIdProof, setHIdproof] = useState('');
    const [hProofFile, setHProofFile] = useState([]);
    const [isHProofFile, setIsHProofFile] = useState(false);
    //const [imageList_H, setImageList_H]=useState([]);

    const [wName, setWName] = useState('');
    const [wNameErr, setWNameErr] = useState(false);
    const [wReligion, setWReligion] = useState('');
    const [wReligionErr, setWReligionErr] = useState(false);
    const [wDob, setWDob] = useState('');
    const [wdobErr, setWDobErr] = useState(false);
    const [wMStatus, setWMStatus] = useState('');
    const [wAdderss, setWAddress] = useState('');
    const [wIdProof, setWIdproof] = useState('');
    const [wProofFile, setWProofFile] = useState([]);
    const [isWProofFile, setIsWProofFile] = useState(false);
    //const [imageList_W, setImageList_W]=useState([]);

    const [w1Name, setW1Name] = useState('');
    const [w1NameErr, setW1NameErr] = useState(false);
    const [w1Adderss, setW1Address] = useState('');
    const [w1IdProof, setW1Idproof] = useState('');
    const [w1ProofFile, setW1ProofFile] = useState([]);
    const [isW1ProofFile, setIsW1ProofFile] = useState(false);

    const [w2Name, setW2Name] = useState('');
    const [w2NameErr, setW2NameErr] = useState(false);
    const [w2Adderss, setW2Address] = useState('');
    const [w2IdProof, setW2Idproof] = useState('');
    const [w2ProofFile, setW2ProofFile] = useState([]);
    const [isW2ProofFile, setIsW2ProofFile] = useState(false);

    const [Dom, setDom] = useState('');
    const [domErr, setDomErr] = useState(false);

    const [hImage, setHImage] = useState([]);
    const [hImageDisplay, setHImageDisplay] = useState(null);
    const [wImage, setWImage] = useState([]);
    const [wImageDisplay, setWImageDisplay] = useState(null);
    const [email, setEmail] = useState(mail);
    const onChange_H = (e) => {
        /* console.log("Frm onChange_h",imageList);
        console.log("1stimag", imageList);

        setHusbondImages(imageList[0]);
        console.log("husband Image= "+husbondImages);
        formData.append('hImage',imageList); */
        // const hImageDisplay=null;
        setHImage(e.target.files[0])
        console.log("target")
        console.log(e.target.files[0]);
        console.log("husband")
        console.log(hImage);
        //setHImageDisplay(URL.createObjectURL(hImage));
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            setHImageDisplay(reader.result);
        }

    };

    const onChange_W = (e) => {
        //console.log(imageList);
        console.log("2ndimag", e.target.files[0]);

        setWImage(e.target.files[0]);
        console.log("wife image " + wImage)
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            setWImageDisplay(reader.result);
        }


    }



    const handleHNameChange = (e) => {
        let husband = e.target.value;
        if (husband.match('.*[0-9].*')) {
            setHNameErr(true);
        }
        else {
            setHNameErr(false);

        }
        setHName(husband);
    }
    const handleHReligionChange = (e) => {
        let hRel = e.target.value;
        if (hRel.match('.*[0-9].*')) {
            setHReligionErr(true);
        }
        else {
            setHReligionErr(false);

        }
        setHReligion(hRel);
    }

    const handleHDobChange = (e) => {
        let hbDob = e.target.value;
        let d1 = new Date(hbDob);
        let d2 = new Date()
        var age = d2.getFullYear() - d1.getFullYear();
        var m = d2.getMonth() - d1.getMonth();
        if (m < 0 || (m === 0 && d2.getDate() < d1.getDate())) {
            age--;
        }
        if (age < 21) {
            setHDobErr(true);
        }
        else {
            setHDobErr(false);

        }
        setHDob(hbDob);

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
    const handleHProofFile = (event) => {
        setHProofFile(event.target.files[0]);
        setIsHProofFile(true);
    };


    const handleWNameChange = (e) => {
        let wife = e.target.value;
        if (wife.match('.*[0-9].*')) {
            setWNameErr(true);
        }
        else {
            setWNameErr(false);

        }
        setWName(wife);
    }
    const handleWReligionChange = (e) => {
        let wRel = e.target.value;
        if (wRel.match('.*[0-9].*')) {
            setWReligionErr(true);
        }
        else {
            setWReligionErr(false);

        }
        setWReligion(wRel);
    }

    const handleWDobChange = (e) => {
        let wfDob = e.target.value;
        let d1 = new Date(wfDob);
        let d2 = new Date()
        if (d1 > d2) {
            setWDobErr(true);
        }
        else {
            setWDobErr(false);

        }
        setWDob(wfDob);

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
    const handleWProofFile = (event) => {
        setWProofFile(event.target.files[0]);
        setIsWProofFile(true);
    };


    const handleW1NameChange = (e) => {
        let wit1 = e.target.value;
        if (wit1.match('.*[0-9].*')) {
            setW1NameErr(true);
        }
        else {
            setW1NameErr(false);

        }
        setW1Name(wit1);
    }
    const handleW1AddressChange = (e) => {
        setW1Address(e.target.value);
    }
    const handleW1IdProofChange = (e) => {
        setW1Idproof(e.target.value)
    }
    const handleW1ProofFile = (event) => {
        setW1ProofFile(event.target.files[0]);
        setIsW1ProofFile(true);
    };

    const handleW2NameChange = (e) => {
        let wit2 = e.target.value;
        if (wit2.match('.*[0-9].*')) {
            setW2NameErr(true);
        }
        else {
            setW2NameErr(false);

        }
        setW2Name(wit2);

    }
    const handleW2AddressChange = (e) => {
        setW2Address(e.target.value);
    }
    const handleW2IdProofChange = (e) => {
        setW2Idproof(e.target.value)
    }
    const handleW2ProofFile = (event) => {
        setW2ProofFile(event.target.files[0]);
        setIsW2ProofFile(true);
    };


    const handleDomChange = (e) => {
        let Dom = e.target.value;
        let d1 = new Date(Dom);
        let d2 = new Date()
        if (d1 > d2) {
            setDomErr(true);
        }
        else {
            setDomErr(false);

        }
        setDom(Dom);
    }


    const handleSubmit = (e) => {
        if (!hNameErr && !hReligionErr && !hdobErr && !wNameErr && !wReligionErr
            && !wdobErr && !w1NameErr && !w2NameErr && !domErr) {
            const formData = new FormData();
            formData.append('hName', hName);
            formData.append('hReligion', hReligion);
            formData.append('hDOB', hDob);
            formData.append('hStatus', hMStatus);
            formData.append('hAddress', hAdderss);
            formData.append('hIdProof', hIdProof);
            formData.append('hProofFile', hProofFile);
            formData.append('hImage', hImage);

            formData.append('wName', wName);
            formData.append('wReligion', wReligion);
            formData.append('wDOB', wDob);
            formData.append('wStatus', wMStatus);
            formData.append('wAddress', wAdderss);
            formData.append('wIdProof', wIdProof);
            formData.append('wProofFile', wProofFile);
            formData.append('wImage', wImage);


            formData.append('w1Name', w1Name);
            formData.append('w1Address', w1Adderss);
            formData.append('w1IdProof', w1IdProof);
            formData.append('w1ProofFile', w1ProofFile);
            formData.append('w2Name', w2Name);
            formData.append('w2Address', w2Adderss);
            formData.append('w2IdProof', w2IdProof);
            formData.append('w2ProofFile', w2ProofFile);
            formData.append('dom', Dom);
            formData.append('email', email);

            console.log("Husband Proof");
            console.log(hProofFile);
            console.log("Husband Image")
            console.log(hImage);
            console.log("wife Image")
            console.log(wImage);
            console.log("wife Proof")
            console.log(wProofFile);
            console.log("w1 Proof")
            console.log(w1ProofFile);
            console.log("w2 Proof")
            console.log(w2ProofFile);
            console.log(w2IdProof);
            console.log(w2Name);
            console.log(w2Adderss);
            console.log(w2IdProof);
            console.log(w2ProofFile);

            console.log(hName + " " + wName);
            axios.post('http://localhost:8080/marriageRegistration', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': 'Bearer ' + sessionStorage.getItem("tokenId")

                }
            }).then(res => {
                    console.log(res.data);
                    alert("Marriage Registration Successfully completed once approved you will receive Marriage Certificate through an Email");
                    navigate("/");
                

            })
        }
        else {

            alert("Please Give correct inputs ");
            // window.location.reload();


        }




    }



    return (
        <div>

            <div className="row justify-content-center box-height" >

                <div className="col-9 align-self-center shadow-lg" style={{ backgroundColor: '#ebf2fa' }} >
                    <div className="row justify-content-center p-2 "><h2 className='textStyleHeading'>Marriage Registration Form</h2></div>
                    <form className="form-inline" enctype="multipart/form-data">

                        <div className="border border-2 p-1" >
                            <div class="row">
                                <div className='row justify-content-center '>
                                    <h3 style={{ fontFamily: 'Verdana', textAlign: "center" }}>Husband Details</h3></div>
                                <div class="col-10">
                                    <div className="mb-3 row justify-content-center">
                                        <label className="col-sm-3 col-form-label">Name of husband</label>
                                        <div className="col-sm-8">
                                            <input type="text" className="form-control" required onChange={(e) => { handleHNameChange(e) }} />
                                            {hNameErr ? <p className='text-danger'>Name should contain characters only</p> : ""}
                                        </div>
                                    </div>


                                    <div className="mb-3 row justify-content-center">
                                        <label className="col-sm-3 col-form-label">Religion</label>
                                        <div className="col-sm-8">
                                            <input type="text" className="form-control" name="hReligion" value={hReligion} required onChange={(e) => handleHReligionChange(e)} />
                                            {hReligionErr ? <p className='text-danger'>Religion should contain characters only</p> : ""}
                                        </div>
                                    </div>


                                    <div className="mb-3 row justify-content-center">
                                        <label className="col-sm-3 col-form-label">Date of Birth</label>
                                        <div className="col-sm-8">

                                            <input className="form-control" type="date" name="hDob" required onChange={(e) => { handleHDobChange(e) }} />
                                            {hdobErr ? <p className='text-danger'>Age criteria violated</p> : ""}
                                        </div>
                                    </div>



                                    <div className="mb-3 row justify-content-center">
                                        <label className="col-sm-3 col-form-label">Marital status</label>
                                        <div className="col-sm-8">
                                            <select className="form-control" name="mStatus" required onChange={(e) => { handleHMStatusChange(e) }}>
                                                <option value="select marital status" disabled selected>Select Marital Status</option>
                                                <option value="BACHELOR">Bachelor</option>
                                                <option value="WIDOW">Widow</option>
                                                <option value="DIVORSEE">Divorcee</option>

                                            </select>
                                        </div>
                                    </div>



                                    <div className="mb-3 row justify-content-center">
                                        <label className="col-sm-3 col-form-label">Address </label>
                                        <div className="col-sm-8">
                                            {/* <input className="form-control" type="text" value={adderss} required onChange={(e) => { handleAddressChange(e) }} /> */}
                                            <textarea className="form-control" type="text" required onChange={(e) => { handleHAddressChange(e) }} />
                                        </div>
                                    </div>


                                    <div className="mb-3 row justify-content-center">
                                        <label className="col-sm-3 col-form-label">Id Proof</label>
                                        <div className="col-sm-8">
                                            <select className="form-control" name="hIdProof" required onChange={(e) => { handleHIdProofChange(e) }}>
                                                <option value="select id proof" disabled selected>Select Id Proof</option>
                                                <option value="AADHAR">Aadhar Card</option>
                                                <option value="PANCARD">Pan Card</option>
                                                <option value="PASSPORT">PassPort</option>

                                            </select>
                                        </div>
                                    </div>


                                    <div className="mb-3 row justify-content-center">
                                        <label className="col-sm-3 col-form-label">Attach Proof</label>
                                        <div className="col-sm-8">
                                            <input type="file" name="file" className='form-control' onChange={handleHProofFile} />
                                            <div>
                                                {/*   <button onClick={handleSubmission}>Submit</button> */}
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div class="col-2">

                                    <input type="file" name="hImage" className='form-control' accept='image/*' onChange={onChange_H} />
                                    <img src={hImageDisplay} alt="" height={"150px"} width={"100px"} />

                                </div>
                            </div>
                        </div>
                        <br></br>

                        <div className="border border-2 p-1" >
                            <div class="row">
                                <div className='row justify-content-center '>
                                    <h3 style={{ fontFamily: 'Verdana', textAlign: "center" }} id="heading">Wife Details</h3></div>


                                <div className="col-10">
                                    <div className="mb-3 row justify-content-center">
                                        <label className="col-sm-3 col-form-label">Name of Wife</label>
                                        <div className="col-sm-8">
                                            <input type="text" className="form-control" required onChange={(e) => { handleWNameChange(e) }} />
                                            {wNameErr ? <p className='text-danger'>Name should contain characters only</p> : ""}
                                        </div>
                                    </div>

                                    <div className="mb-3 row justify-content-center">
                                        <label className="col-sm-3 col-form-label">Religion</label>
                                        <div className="col-sm-8">
                                            <input type="text" className="form-control" name="wReligion" required onChange={(e) => handleWReligionChange(e)} />
                                            {wReligionErr ? <p className='text-danger'>Religion should contain characters only</p> : ""}
                                        </div>
                                    </div>

                                    <div className="mb-3 row justify-content-center">
                                        <label className="col-sm-3 col-form-label">Date of Birth</label>
                                        <div className="col-sm-8">
                                            <input className="form-control" type="date" name="wDob" required onChange={(e) => { handleWDobChange(e) }} />
                                            {wdobErr ? <p className='text-danger'>Age criteria violated</p> : ""}
                                        </div>
                                    </div>

                                    <div className="mb-3 row justify-content-center">
                                        <label className="col-sm-3 col-form-label">Marital status</label>
                                        <div className="col-sm-8">
                                            <select className="form-control" name="wStatus" required onChange={(e) => { handleWMStatusChange(e) }}>
                                                <option value="select marital status" disabled selected>Select Marital Status</option>
                                                <option value="BACHELOR">Bachelor</option>
                                                <option value="WIDOW">Widow</option>
                                                <option value="DIVORSEE">Divorcee</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="mb-3 row justify-content-center">
                                        <label className="col-sm-3 col-form-label">Address </label>
                                        <div className="col-sm-8">
                                            <textarea className="form-control" type="text" required onChange={(e) => { handleWAddressChange(e) }} />
                                        </div>
                                    </div>

                                    <div className="mb-3 row justify-content-center">
                                        <label className="col-sm-3 col-form-label">Id Proof</label>
                                        <div className="col-sm-8">
                                            <select className="form-control" name="wIdProof" required onChange={(e) => { handleWIdProofChange(e) }}>
                                                <option value="select id proof" disabled selected>Select Id Proof</option>
                                                <option value="AADHAR">Aadhar Card</option>
                                                <option value="PANCARD">Pan Card</option>
                                                <option value="PASSPORT">PassPort</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="mb-3 row justify-content-center">
                                        <label className="col-sm-3 col-form-label">Attach Proof</label>
                                        <div className="col-sm-8">
                                            <input type="file" name="file" className='form-control' onChange={handleWProofFile} />
                                            <div>
                                                {/*   <button onClick={handleSubmission}>Submit</button> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div class="col-2">
                                    <input type="file" name="wImage" className='form-control' accept='image/*' onChange={onChange_W} />
                                    <img src={wImageDisplay} alt="" height={"150px"} width={"100px"} />

                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="border border-2 p-1" >
                            <div className='row'>
                                <div className='row justify-content-center '> <h3 className='p-2 rounded' id="heading">Witness 1 Details</h3></div>
                                <div className='col-10'>
                                    <div className="mb-3 row justify-content-center">
                                        <label className="col-sm-3 col-form-label">Name:</label>
                                        <div className="col-sm-8">
                                            <input type="text" className="form-control" required onChange={(e) => { handleW1NameChange(e) }} />
                                            {w1NameErr ? <p className='text-danger'>Name should contain characters only</p> : ""}
                                        </div>
                                    </div>


                                    <div className="mb-3 row justify-content-center">
                                        <label className="col-sm-3 col-form-label">Address </label>
                                        <div className="col-sm-8">
                                            {/* <input className="form-control" type="text" value={adderss} required onChange={(e) => { handleAddressChange(e) }} /> */}
                                            <textarea className="form-control" type="text" required onChange={(e) => { handleW1AddressChange(e) }} />
                                        </div>
                                    </div>



                                    <div className="mb-3 row justify-content-center">
                                        <label className="col-sm-3 col-form-label">Id Proof</label>
                                        <div className="col-sm-8">
                                            <select className="form-control" name="w1IdProof" required onChange={(e) => { handleW1IdProofChange(e) }}>
                                                <option value="select id proof" disabled selected>Select Id Proof</option>
                                                <option value="AADHAR">Aadhar Card</option>
                                                <option value="PANCARD">Pan Card</option>
                                                <option value="PASSPORT">PassPort</option>

                                            </select>
                                        </div>
                                    </div>


                                    <div className="mb-3 row justify-content-center">
                                        <label className="col-sm-3 col-form-label">Attach Proof</label>
                                        <div className="col-sm-8">
                                            <input type="file" name="file" className='form-control' onChange={handleW1ProofFile} />
                                            <div>
                                                {/*   <button onClick={handleSubmission}>Submit</button> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <br />
                        <div className="border border-2 p-1">
                            <div className='row'>
                                <div className='row justify-content-center '> <h3 className='p-2 rounded' id="heading">Witness 2 Details</h3></div>
                                <div className='col-10'>
                                    <div className="mb-3 row justify-content-center">
                                        <label className="col-sm-3 col-form-label">Name:</label>
                                        <div className="col-sm-8">
                                            <input type="text" className="form-control" required onChange={(e) => { handleW2NameChange(e) }} />
                                            {w2NameErr ? <p className='text-danger'>Name should contain characters only</p> : ""}
                                        </div>
                                    </div>






                                    <div className="mb-3 row justify-content-center">
                                        <label className="col-sm-3 col-form-label">Address </label>
                                        <div className="col-sm-8">
                                            {/* <input className="form-control" type="text" value={adderss} required onChange={(e) => { handleAddressChange(e) }} /> */}
                                            <textarea className="form-control" type="text" required onChange={(e) => { handleW2AddressChange(e) }} />
                                        </div>
                                    </div>



                                    <div className="mb-3 row justify-content-center">
                                        <label className="col-sm-3 col-form-label">Id Proof</label>
                                        <div className="col-sm-8">
                                            <select className="form-control" name="w2IdProof" required onChange={(e) => { handleW2IdProofChange(e) }}>
                                                <option value="select id proof" disabled selected>Select Id Proof</option>
                                                <option value="AADHAR">Aadhar Card</option>
                                                <option value="PANCARD">Pan Card</option>
                                                <option value="PASSPORT">PassPort</option>

                                            </select>
                                        </div>
                                    </div>


                                    <div className="mb-3 row justify-content-center">
                                        <label className="col-sm-3 col-form-label">Attach Proof</label>
                                        <div className="col-sm-8">
                                            <input type="file" name="file" className='form-control' onChange={handleW2ProofFile} />
                                            <div>
                                                {/*   <button onClick={handleSubmission}>Submit</button> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <br />
                        <div className="border border-2 p-1">
                            <div className='row'>

                                <div className='col-10'>
                                    <div className="mb-3 row justify-content-center">
                                        <label className="col-sm-3 col-form-label">Marriage Date:</label>
                                        <div className="col-sm-8">

                                            <input className="form-control" type="date" name="dom" required onChange={(e) => { handleDomChange(e) }} />
                                            {domErr ? <p className='text-danger'>Date of marriage cannot be a future date.</p> : ""}
                                        </div>
                                    </div>


                                </div>
                            </div>

                        </div>


                        <div className='wraper'>   <input type="button" value="Submit" className='btn  btn-lg' id='submitbutton' onClick={(e) => { handleSubmit(e) }} />

                        </div>
                        <br />

                    </form>

                </div></div>

        </div>
    );
}

export default MarriageRegistration;
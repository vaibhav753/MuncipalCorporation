import "../../Addcss/Complaint.css";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const MarriageDetails = () => {
    const [marriageReg, setMarriageReg] = useState({});
    const [hImageDisplay, setHImageDisplay]=useState(null);
    const [wImageDisplay, setWImageDisplay]=useState(null);
    const navigate = useNavigate();
    const Id = useParams();
    const reader = new FileReader();
    console.log("Id",Id.id);
    console.log(typeof(Id));
    useEffect(() => {
        axios.get('http://localhost:8080/marriageRegistration/marriageDetails/'+Id.id, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + sessionStorage.getItem("tokenId")
            },

        }).then((res) => {
            console.log("res", res.data);
            setMarriageReg(res.data);
            console.log("success", marriageReg);
            const blob= new Blob(marriageReg.husbandImage);
            setHImageDisplay(URL.createObjectURL(blob));

          /*  
            reader.readAsDataURL(marriageReg.husbandImage);
            reader.onload=()=>{
                setHImageDisplay(reader.result);}
                reader.readAsDataURL(marriageReg.wifeImage);
            reader.onload=()=>{
                setWImageDisplay(reader.result);} */
        })
            .catch((err) => {
                console.error(err);
            });
    }, [])

   
  
    return (
        <div>
            <div className="row justify-content-center box-height">
                <div className="col-9 align-self-center shadow-lg" style={{ backgroundColor: '#ebf2fa' }}>
                    <div className="row justify-content-center p-2">
                        < h2 className="textStyleHeading">Marriage Registration Details</h2>
                    </div>
                    <form className="form-inline"   enctype="multipart/form-data">

<div className="border border-2 p-1" >
    <div class="row">
        <div className='row justify-content-center '>
            <h3 style={{ fontFamily: 'Verdana', textAlign: "center" }}>Husband Details</h3></div>
        <div class="col-10">
            <div className="mb-3 row justify-content-center">
                <label className="col-sm-3 col-form-label">Name of husband</label>
                <div className="col-sm-8">
                    <input type="text" className="form-control" value={marriageReg.husbandName} readOnly/>
                    
                </div>
            </div>


            <div className="mb-3 row justify-content-center">
                <label className="col-sm-3 col-form-label">Religion</label>
                <div className="col-sm-8">
                    <input type="text" className="form-control" name="hReligion" value={marriageReg.husbandReligion} readOnly />
                  
                </div>
            </div>


            <div className="mb-3 row justify-content-center">
                <label className="col-sm-3 col-form-label">Date of Birth</label>
                <div className="col-sm-8">

                    <input className="form-control" type="date" name="hDob" value={marriageReg.husbandDob} readOnly />
                   
                </div>
            </div>



            <div className="mb-3 row justify-content-center">
                <label className="col-sm-3 col-form-label">Marital status</label>
                <div className="col-sm-8">
                    <input className="form-control" name="mStatus" value={marriageReg.husbandStatus} readOnly/>
                </div>
            </div>



            <div className="mb-3 row justify-content-center">
                <label className="col-sm-3 col-form-label">Address </label>
                <div className="col-sm-8">
                    {/* <input className="form-control" type="text" value={adderss} required onChange={(e) => { handleAddressChange(e) }} /> */}
                    <textarea className="form-control" type="text"  value={marriageReg.husbandAddress} readOnly/>
                </div>
            </div>


            <div className="mb-3 row justify-content-center">
                <label className="col-sm-3 col-form-label">Id Proof</label>
                <div className="col-sm-8">
                    <input className="form-control" name="hIdProof"value={marriageReg.husbandIdProof} readOnly />
                
                </div>
            </div>


            

        </div>
        <div class="col-2">
        <img src={`data:image/jpeg;base64,${marriageReg.husbandImage}`} alt="" height={"150px"} width={"100px"}/>
        
      

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
                    <input type="text" className="form-control" value={marriageReg.wifeName} readOnly />
                    
                </div>
            </div>

            <div className="mb-3 row justify-content-center">
                <label className="col-sm-3 col-form-label">Religion</label>
                <div className="col-sm-8">
                    <input type="text" className="form-control" name="wReligion"  value={marriageReg.wifeReligion} readOnly />
                  
                </div>
            </div>

            <div className="mb-3 row justify-content-center">
                <label className="col-sm-3 col-form-label">Date of Birth</label>
                <div className="col-sm-8">
                    <input className="form-control" type="date" name="wDob" value={marriageReg.wifeDob} readOnly  />
                    
                </div>
            </div>

            <div className="mb-3 row justify-content-center">
                <label className="col-sm-3 col-form-label">Marital status</label>
                <div className="col-sm-8">
                    <input className="form-control" name="wStatus" value={marriageReg.wifeStatus} readOnly/>
                  
                </div>
            </div>

            <div className="mb-3 row justify-content-center">
                <label className="col-sm-3 col-form-label">Address </label>
                <div className="col-sm-8">
                    <textarea className="form-control" type="text"  value={marriageReg.wifeAddress} readOnly/>
                </div>
            </div>

            <div className="mb-3 row justify-content-center">
                <label className="col-sm-3 col-form-label">Id Proof</label>
                <div className="col-sm-8">
                    <input className="form-control" name="wIdProof"  value={marriageReg.wifeIdProof} readOnly/>
                </div>
            </div>

            
        </div>

        <div class="col-2">
        <img src={`data:image/jpeg;base64,${marriageReg.wifeImage}`} alt="" height={"150px"} width={"100px"}/>
         
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
                    <input type="text" className="form-control" value={marriageReg.witness1Name} readOnly />
                </div>
            </div>


            <div className="mb-3 row justify-content-center">
                <label className="col-sm-3 col-form-label">Address </label>
                <div className="col-sm-8">
                    {/* <input className="form-control" type="text" value={adderss} required onChange={(e) => { handleAddressChange(e) }} /> */}
                    <textarea className="form-control" type="text" value={marriageReg.witness1address} readOnly />
                </div>
            </div>



            <div className="mb-3 row justify-content-center">
                <label className="col-sm-3 col-form-label">Id Proof</label>
                <div className="col-sm-8">
                    <input className="form-control" name="w1IdProof"  value={marriageReg.witness1IdProof} readOnly/>
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
                    <input type="text" className="form-control" value={marriageReg.witness2Name} readOnly/>
                  
                </div>
            </div>
            <div className="mb-3 row justify-content-center">
                <label className="col-sm-3 col-form-label">Address </label>
                <div className="col-sm-8">
                    {/* <input className="form-control" type="text" value={adderss} required onChange={(e) => { handleAddressChange(e) }} /> */}
                    <textarea className="form-control" type="text" value={marriageReg.witness2address} readOnly />
                </div>
            </div>



            <div className="mb-3 row justify-content-center">
                <label className="col-sm-3 col-form-label">Id Proof</label>
                <div className="col-sm-8">
                    <input className="form-control" name="w2IdProof" value={marriageReg.witness2IdProof} readOnly/>
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

                    <input className="form-control" type="date" name="dom"  value={marriageReg.marriageDate} readOnly />
                   
                </div>
            </div>


        </div>
    </div>

</div>


<div className='wraper'>   <input type="button" value="BACK" className='btn btn-lg' id='submitbutton' onClick={() => navigate(-1)} /></div>
<br />

</form>



                    <br></br>


                </div>
            </div>

        </div>

    )
}

export default MarriageDetails;
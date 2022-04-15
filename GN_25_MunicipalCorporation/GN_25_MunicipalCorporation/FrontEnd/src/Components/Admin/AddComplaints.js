import '../Addcss/Registration.css'
import '../Addcss/button.css'
import '../Addcss/formHeading.css'
import React, { useState, useEffect } from 'react';
// import ComplaintTypeService from '../../service/ComplaintTypeService'
import axios from 'axios';
const AddComplaint = () => {
    const [mainT, setMainType] = useState('');
    const [subT, setSubType] = useState('');
    const [nameErr, setNameErr] = useState('');
    const [dropDown, setDropDown] = useState('');
    const [dropDownErr, setDropDownErr] = useState('');

    const handleMainTypeChange = (e) => {
        let name = e.target.value;
        if (name.match('.*[0-9].*')) {
            setNameErr(true);
        }
        else {
            setNameErr(false);

        }
        setMainType(name);
    }
    const handleSubTypeChange = (e) => {
        let name = e.target.value;
        if (name.match('.*[0-9].*')) {
            setNameErr(true);
        }
        else {
            setNameErr(false);

        }
        setSubType(name);
    }

    const [mainCType, setMainCType] = useState([]);

    useEffect(() => {

        // ComplaintTypeService.getComplaintTypes()
        //   .then((res) => {
        //     console.log('res ', res.data);
        //     setMainCType(res.data);

        //   })
        //   .catch((err) => {
        //     console.error(err);
        //   });

        // ComplaintTypeService.getMainComplaint()
        axios.get(`http://localhost:8080/removeComplaint/main`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("tokenId")}`
            }
        })
            .then((res) => {
                console.log('res ', res.data);
                setMainCType(res.data);

            })
            .catch((err) => {
                console.error(err);
            });

    }, []);

    const fillInputField = () => {
        document.getElementById('main_type').value = document.getElementById('mType').value;
    }

    const data =
    {
        mainType: mainT,
        subType: subT,


    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (document.getElementById('mType').value != "") {
            data.mainType = document.getElementById('mType').value;
        }
        // ComplaintTypeService.addComplaint(data)
        axios.post("http://localhost:8080/addComplaint", data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("tokenId")}`
            }
        })
            .then((res) => {
                console.log(res.data)
                alert("Complaint Type added!");
                window.location.reload();
            })
            .catch((err) => {
                console.log(err)
            })

    }


    return (
        <div className="row justify-content-center ">

            <div className="row justify-content-center p-2 box-height">
                {/* <NavigationBar></NavigationBar> */}
                <br></br>
                <div className="col-6 align-self-center shadow-lg" style={{ backgroundColor: '#ebf2fa' }}>
                    <div className="row justify-content-center p-2">

                        <h2 className='textStyleHeading'>Add a complaint</h2>

                        <form className="form-inline" onSubmit={(e) => { handleSubmit(e) }}>


                            <div className="mb-3 row justify-content-center">
                                <label className="col-sm-3 col-form-label">Main Type</label>
                                <div className="col-sm-8" >
                                    <select className="form-control" name="mType" id="mType" onChange={fillInputField} >
                                        {/* <option value="complaint" disabled selected>Select complaint</option> */}
                                        <option value="">other</option>
                                        {/* <option value="water">Water</option>
                                        <option value="road">Road</option> */}

                                        {mainCType.map((item) => {
                                            return <option value={item}>{item}</option>
                                        })}

                                    </select>
                                </div>
                            </div>

                            <div className='mb-3 row justify-content-center' >
                                <label className="col-sm-3 col-form-label">Main type</label>
                                <div className="col-sm-8">
                                    <input type="text" id="main_type" className="form-control form-control-lg" title="complaint is not proper" placeholder="Enter complaint Name" onChange={(e) => { handleMainTypeChange(e) }} required />
                                    {/* {nameErr?<p className='text-danger'>Name should contain characters only</p>:""} */}
                                </div>
                            </div>

                            <div className='mb-3 row justify-content-center' >
                                <label className="col-sm-3 col-form-label">sub-type</label>
                                <div className="col-sm-8">
                                    <input type="text" id="sub_type" className="form-control form-control-lg" title="Name is not proper" placeholder="Enter Name" required onChange={(e) => { handleSubTypeChange(e) }} />
                                    {/* {nameErr?<p className='text-danger'>Name should contain characters only</p>:""} */}
                                </div>
                            </div>




                            <div className='wraper'>
                                <input type="submit" value="Add Complaint" className='btn btn-primary btn-lg' id='submitbutton' />
                            </div>

                            {/* <p className="text-center mt-5 ">Have already an account? <a href="/login" className="fw-bold">Login here</a></p> */}
                        </form>
                    </div>
                </div >
            </div >

        </div >


    )
}

export default AddComplaint;
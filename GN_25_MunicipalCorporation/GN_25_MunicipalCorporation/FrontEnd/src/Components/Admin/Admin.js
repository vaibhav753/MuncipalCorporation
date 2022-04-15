
import { BiCheck, BiTrash, BiX } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';


import "../Addcss/HomePage.css";

const AdminPage = () => {
    const navigate = useNavigate();

    const addHOD = (e) => {
        e.preventDefault();
        navigate('/hodRegistration');
    }


    const removeHOD = (e) => {
        e.preventDefault();
        navigate('/HODlist');
    }
    const addComplaint = (e) => {
        e.preventDefault();
        navigate('/addComplaint');
    }
    const removeComplaint = (e) => {
        e.preventDefault();
        navigate('/removeComplaint');
    }
    return (
        <body>

            <div className='container-fluid my-5'>
                <div className="container card-img-overlay">
                    <div className="d-sm-flex align-items-center justify-content-between">
                    </div>
                </div>


                <section className="p-4 my-8">
                    <div className="container">
                        <div className="row text-center g-4 my-4">



                            <div className="col-md">
                                <div className="card zoom " id="card">
                                    <div className="card-body text-center">
                                        <div className="h1 mb-3">
                                            {/* <i className="bi bi-filter-square"></i> */}
                                            <BiCheck />
                                        </div>
                                        <h3 className="card-title mb-3">Add HOD</h3>

                                        <button onClick={(e) => addHOD(e)} className="btn btn-primary" style={{ backgroundColor: 'silver', color: 'black', fontWeight: 'bold' }}>Click here</button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md">
                                <div className="card zoom" id="card">
                                    <div className="card-body text-center">
                                        <div className="h1 mb-3">
                                            <BiX></BiX>
                                        </div>
                                        <h3 className="card-title mb-3">Remove HOD</h3>

                                        {/* <a href="#" className="btn btn-primary">Click here</a> */}
                                        <button onClick={(e) => removeHOD(e)} className="btn btn-primary" style={{ backgroundColor: 'silver', color: 'black', fontWeight: 'bold' }}>Click here</button>
                                    </div>
                                </div>



                            </div>

                            <div className="col-md">
                                <div className="card zoom " id="card">
                                    <div className="card-body text-center">
                                        <div className="h1 mb-3">
                                            {/* <i className="bi bi-filter-square"></i> */}
                                            <BiCheck />
                                        </div>
                                        <h3 className="card-title mb-3">Add Complaint</h3>

                                        <button onClick={(e) => addComplaint(e)} className="btn btn-primary" style={{ backgroundColor: 'silver', color: 'black', fontWeight: 'bold' }}>Click here</button>
                                    </div>
                                </div>
                            </div>


                            <div className="col-md">
                                <div className="card zoom" id="card">
                                    <div className="card-body text-center">
                                        <div className="h1">
                                            <BiX></BiX>
                                        </div>
                                        <h3 className="card-title mb-3">Remove compliants</h3>

                                        {/* <a href="#" className="btn btn-primary">Click here</a> */}
                                        <button onClick={(e) => removeComplaint(e)} className="btn btn-primary" style={{ backgroundColor: 'silver', color: 'black', fontWeight: 'bold' }}>Click here</button>
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

export default AdminPage;  
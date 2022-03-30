import NavigationBar from "./NavigationBar";


const Contact = () => {
    return (
        <div>
        <section className="p-5">
            <NavigationBar></NavigationBar>
            <div className="container my-5">
                <div className="row g-4">
                    <div className="col-md-6">
                        <h2 className="mb-4 shadow p-3 mb-5 bg-white rounded">Contact Details</h2>
                        <ul className="list-group list-group-flush lead">
                            <li className="list-group-item">
                                <span className="fw-bold">Main Location:</span> Annex Building, Mahapalika Marg No 1, Fort, Mumbai - 400001, Opposite CST Railway Station, Besides Times Of India Building
                            </li>
                            <li className="list-group-item">
                                <span className="fw-bold">Contact no : </span>022 2262 0251
                            </li>
                            <li className="list-group-item">
                                <span className="fw-bold">Enrollment Email : </span>
                                www.mcgm.gov.in
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        
        </div>


    )

}

export default Contact;
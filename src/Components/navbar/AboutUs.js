
import cityImage from "../Images/newcity.jpg";


const AboutUs = () => {
    return (
        <div>
        <section id="aboutUs" className="p-5">
            {/* <NavigationBar></NavigationBar> */}
            <div className="container">
                <div className="row align-items-center justify-content-between">

                    <div className="col-md p-5 my-5">
                        <h1>About Us</h1>
                        <p className="lead">
                            Welcome to Mumbai Municipal Corporation  Portal. In our endeavor to offer quality
                            Citizen Services, we are now happy to bring the Corporation at your finger tips through this portal                        </p>

                        <table className=" table table-sm">
                            <thead>
                                <tr className="fs-4">
                                    <th scope="col">Information</th>
                                    <th scope="col">Details</th>
                                </tr>
                            </thead>
                            <tbody >
                                <tr>
                                    <td className="fw-bold">Date of Establishment</td>
                                    <td>08 December 1982</td>
                                </tr>
                                <tr>
                                    <td className="fw-bold">Population</td>
                                    <td>1,175,116</td>
                                </tr>
                                <tr>
                                    <td className="fw-bold">Area</td>
                                    <td>
                                        The Mumbai District’s total area is 10,100 Sq. Kilo Mtrs. Out of which 141.1 Sq. Km is Urban area and 99,587 Sq. Km is Rural Area.</td>
                                </tr>
                                <tr>
                                    <td className="fw-bold">Average Yearly Rainfall</td>
                                    <td>734 mm</td>
                                </tr>
                                <tr>
                                    <td className="fw-bold">Geographical Situation</td>
                                    <td> This District’s general down level is towards South and East and North West part comes in Purna-Godavari river basin. The Aurangabad district’s North Longitude ( Degree) is 19 and 20 and East Longitude (Degree ) is 74 to 76.</td>
                                </tr>
                                <tr>
                                    <td className="fw-bold">No. Of Wards</td>
                                    <td>9</td>
                                </tr>
                                <tr>
                                    <td className="fw-bold">Language</td>
                                    <td>Marathi, Hindi and English </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    <div className="col-md">
                        <img src={cityImage} className="img-fluid" alt="" />
                    </div>
                </div>
            </div>
            
        </section>
       
        </div>

    )
}
export default AboutUs;
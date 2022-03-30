import '../Addcss/Registration.css'
import NavigationBar from './NavigationBar';
import '../Addcss/button.css'
import '../Addcss/formHeading.css'

const Registration = () => {
    return (
        <div className="row justify-content-center ">

            <div className="row justify-content-center p-2 box-height">
                {/* <NavigationBar></NavigationBar> */}
                <br></br>
                <div className="col-6 align-self-center shadow-lg" style={{ backgroundColor: '#ebf2fa' }}>
                    <div className="row justify-content-center p-2">

                        <h2 className='textStyleHeading'>Create an account</h2>

                        <form className="form-inline">
                            <div className='mb-3 row justify-content-center' >
                                <label className="col-sm-3 col-form-label">Name</label>
                                <div className="col-sm-8">
                                    <input type="text" id="name" className="form-control form-control-lg" />
                                </div>
                            </div>

                            <div className='mb-3 row justify-content-center'>
                                <label className="col-sm-3 col-form-label">Email</label>
                                <div className="col-sm-8">
                                    <input type="email" id="email" className="form-control form-control-lg" placeholder="name@example.com" />
                                </div>
                            </div>

                            <div className='mb-3 row justify-content-center'>
                                <label className="col-sm-3 col-form-label">Password</label>
                                <div className="col-sm-8">
                                    <input type="password" id="password" className="form-control form-control-lg" />
                                </div>
                            </div>

                            <div className='mb-3 row justify-content-center'>
                                <label className="col-sm-3 col-form-label">Confirm Password</label>
                                <div className="col-sm-8">
                                    <input type="password" id="confPassword" className="form-control form-control-lg" />
                                </div>
                            </div>


                            <div className='wraper'>
                                <input type="submit" value="Register" className='btn btn-primary btn-lg' id='submitbutton' />
                            </div>

                            <p className="text-center mt-5 ">Have already an account? <a href="/login" className="fw-bold">Login here</a></p>
                        </form>
                    </div>
                </div >
            </div >

        </div >


    )
}

export default Registration;
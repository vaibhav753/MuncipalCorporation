
const NavigationBar = () => {

    

    return (
        <nav className="navbar navbar-expand-lg py-2 fixed-top" style={{backgroundColor:"Black"}}>

            <div className="container">
                <a href="/" className="navbar-brand" style={{color:"white"}}>Muncipal Corporation</a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navmenu">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a href='/aboutUs' className="nav-link text-white">About Us</a>

                        </li>
                        {/* <li className="nav-item">
                            <a href="#questions" className="nav-link text-white">Tourist</a>
                        </li> */}
                        {/* <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-white" href="#instructors" data-bs-toggle="dropdown" aria-expanded="false">
                                Tourist DropDown
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href='/garden'>Garden</a></li>
                                <li><a className="dropdown-item" href='/zoo'>Zoo</a></li>
                                <li><a className="dropdown-item" href='/others'>Something else here</a></li>
                            </ul>
                        </li> */}

                        <li className="nav-item">
                            <div className="dropdown">
                                <button className="btn dropdown-toggle text-light" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Tourist
                                </button>

                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="/touristGarden">Garden</a>
                                    <a className="dropdown-item" href="/touristZoo">Zoo</a>

                                </div>
                            </div>
                        </li>



                        <li className="nav-item">
                            <a href="/contact" className="nav-link text-white">Contact</a>
                        </li>

                        <div class="btn-group mx-auto">
                            <li class="nav-item">
                                <a href="/login" class="btn btn-primary">Login</a>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavigationBar;
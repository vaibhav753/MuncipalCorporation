import { useNavigate } from 'react-router-dom';


const NavigationBar = () => {

    const navigate = useNavigate();

    const LogoutHandler = () => {
        sessionStorage.clear();
        navigate("/");
    }


    return (
        <nav className="navbar navbar-expand-lg py-2 fixed-top" style={{ backgroundColor: "Black" }}>

            <div className="container">
                <a href="/" className="navbar-brand" style={{ color: "white" }}>Municipal Corporation</a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navmenu">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a href='/aboutUs' className="nav-link text-white">About Us</a>

                        </li>

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

                        {sessionStorage.getItem("tokenId") != null ?
                            <div class="btn-group mx-auto">
                                <li class="nav-item">
                                    <button className="btn btn-primary" onClick={LogoutHandler}>Logout</button>
                                </li>
                            </div> : <div class="btn-group mx-auto">
                                <li class="nav-item">
                                    <a href="/login" className="btn btn-primary">Login</a>
                                </li>
                            </div>}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavigationBar;
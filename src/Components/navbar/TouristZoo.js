import NavigationBar from "./NavigationBar";
import tiger from "../Images/tiger.png";

import zoo2 from "../Images/zoo2.png";
import zoo3 from "../Images/zoo3.png";
import zoo4 from "../Images/zoo4.png";
import zoo5 from "../Images/zoo5.png";
import zoo6 from "../Images/zoo6.png";
import zoo7 from "../Images/zoo7.png";
import zoo8 from "../Images/zoo8.png";
import zoo9 from "../Images/zoo9.png";

const TouristZoo = () => {
    return (
        <section id="garden" >
            <NavigationBar></NavigationBar>
            <div className="container">
                <div className="row align-items-center justify-content-between">

                    <div className="col-md p-5 my-5">
                        <h1>BMC Zoo</h1>
                        <p className="lead">
                            It has been our endeavour to continue the rich legacy of facilitating a clean and visitor friendly zoo which has wide variety of 270+ animals, reptiles, aquatic animals, birds as well as exceptional & rare flora fauna in the area, spread over 53 acres having 64 internal gardens some with themes like Japanese, Miyawaki, Rose Gardens, etc. - right in the heart of our hustling & bustling mega city, Mumbai! All this at extremely low and affordable rates, just so that maximum children and people benefit from educational & experiential perspective.

                            Our staff, curator, biologist, veterinary doctors, Animal keepers, gardeners, security personnel & maintenance teams have taken lots of efforts to develop & maintain the zoo based on scientific studies & analysis in order to provide secure, clean & hygienic exhibits for all animals & birds. For us, the animals, birds & trees are like our own family members.
                        </p>
                        <p>

                        </p>
                    </div>
                </div>

                <div class="container">
                    <div class="row g-4">
                        <div class="col-md-4">
                            <img src={tiger} className="img-fluid" alt="" height="400" width="500" />
                        </div>
                        <div class="col-md-4">
                            <img src={zoo2} className="img-fluid" alt="" height="400" width="500" />
                        </div>
                        <div class="col-md-4">
                            <img src={zoo3} className="img-fluid" alt="" height="400" width="500" />
                        </div>
                    </div>
                    <div class="row g-4 my-2">
                        <div class="col-md-4">
                            <img src={zoo4} className="img-fluid" alt="" height="400" width="500" />
                        </div>
                        <div class="col-md-4">
                            <img src={zoo5} className="img-fluid" alt="" height="400" width="500" />
                        </div>
                        <div class="col-md-4">
                            <img src={zoo6} className="img-fluid" alt="" height="400" width="500" />
                        </div>
                    </div>
                    <div class="row g-4 my-2">
                        <div class="col-md-4">
                            <img src={zoo7} className="img-fluid" alt="" height="400" width="500" />
                        </div>
                        <div class="col-md-4">
                            <img src={zoo8} className="img-fluid" alt="" height="400" width="500" />
                        </div>
                        <div class="col-md-4">
                            <img src={zoo9} className="img-fluid" alt="" height="400" width="500" />
                        </div>
                    </div>
                </div>
            </div>


        </section>
    )
}
export default TouristZoo;

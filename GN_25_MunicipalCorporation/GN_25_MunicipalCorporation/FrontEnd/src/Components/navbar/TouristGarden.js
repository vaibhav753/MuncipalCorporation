/* import NavigationBar from "./NavigationBar"; */
import g1 from "../Images/g1.png";
import g2 from "../Images/g2.png";
import g3 from "../Images/g3.png";
import g4 from "../Images/g4.png";
import g5 from "../Images/g5.png";

import g6 from "../Images/g6.png";
import g7 from "../Images/g7.png";
import g8 from "../Images/g8.png";
import g9 from "../Images/g9.png";
const TouristGarden = () => {
    return (
        <section id="garden" >
            {/* <NavigationBar></NavigationBar> */}
            <div className="container">
                <div className="row align-items-center justify-content-between">

                    <div className="col-md p-5 my-5">
                        <h1>BMC Gardens</h1>
                        <p className="lead">
                            Open spaces within one of the most dense mega cities like Mumbai are a boon, not just to improve green cover but also to provide visual treat, places to connect, play and relax. 200+ BMC Gardens & Parks have come a long way, trying to meet the expectations and growing demands of Mumbaikars as well as those of the visitors. Lot more needs to be done, and will be done. Glimpses of some of the BMC Gardens are examples of what active, positive & vigilant citizen participation & partnership can help us achieve.

                            Do visit our gardens, relax and have a great time with your near ones, of course following COVID appropriate behaviour.
                        </p>
                        <p>

                        </p>
                    </div>
                </div>

                <div className="container">
                    <div className="row g-4">
                        <div className="col-md-4">
                            <img src={g1} className="img-fluid" alt="" height="400" width="500" />
                        </div>
                        <div class="col-md-4">
                            <img src={g2} className="img-fluid" alt="" height="400" width="500" />
                        </div>
                        <div class="col-md-4">
                            <img src={g3} className="img-fluid" alt="" height="400" width="500" />
                        </div>
                    </div>
                    <div class="row g-4 my-2">
                        <div class="col-md-4">
                            <img src={g4} className="img-fluid" alt="" height="400" width="500" />
                        </div>
                        <div class="col-md-4">
                            <img src={g5} className="img-fluid" alt="" height="400" width="500" />
                        </div>
                        <div class="col-md-4">
                            <img src={g6} className="img-fluid" alt="" height="400" width="500" />
                        </div>
                    </div>
                    <div class="row g-4 my-2">
                        <div class="col-md-4">
                            <img src={g7} className="img-fluid" alt="" height="400" width="500" />
                        </div>
                        <div class="col-md-4">
                            <img src={g8} className="img-fluid" alt="" height="400" width="500" />
                        </div>
                        <div class="col-md-4">
                            <img src={g9} className="img-fluid" alt="" height="400" width="500" />
                        </div>
                    </div>
                </div>
            </div>


        </section>
    )
}

export default TouristGarden;
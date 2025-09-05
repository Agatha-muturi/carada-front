import Globe from "../images/traffic.jpeg";
import Cause from '../images/accident.jpeg';
import Mapp from '../images/map.jpeg';

function Landing() {
    return(
        <div>
            <div className="bg-light">
                <div className="hero">
                    <div className="">
                        <h1 className="display">Our Services</h1>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                            <img src={Globe} className="card-img-top" alt="traffic"/>
                                <div className="card-body">
                                    <p className="card-text">Updates you on real-time traffic.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src={Cause} className="card-img-top" alt="cause"/>
                                <div className="card-body">
                                    <p className="card-text">Shows the cause of traffic, could be an accident, construction or overlapping.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                            <img src={Mapp} className="card-img-top" alt="map"/>
                                <div className="card-body">
                                    <p className="card-text">Gives you an alternative route to use to avoid the traffic.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                            <img src={Globe} className="card-img-top" alt="traffic"/>
                                <div className="card-body">
                                    <p className="card-text">Updates you on real-time traffic.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}
export default Landing;
    
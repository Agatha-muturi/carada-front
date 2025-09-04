import traffic from'../images/traffic.jpeg';
import map from '../images/map.jpeg';
import cause from '../images/accident.jpeg';


function Landing() {
    return(
        <div>
            <div className="bg-light">
                <div className="hero">
                    <div className="">
                        <h1 className="display">Welcome to Car Rada</h1>
                        <p className="display-p"> Stay informed on real-time traffic updates. Motorists can report traffic,
                            upload photos, and share causes of traffic. Get alternative routes and
                            drive smarter with Car Rada.<br/>
                            <i>Safiri bila stress</i>
                        </p>
                        
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                            <img src={traffic} className="card-img-top" alt="traffic"/>
                                <div className="card-body">
                                    <p className="card-text">Updates you on real-time traffic.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src={cause} className="card-img-top" alt="cause"/>
                                <div className="card-body">
                                    <p className="card-text">Shows the cause of traffic, could be an accident, construction or overlapping.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                            <img src={map} className="card-img-top" alt="map"/>
                                <div className="card-body">
                                    <p className="card-text">Gives you an alternative route to use to avoid the traffic.</p>
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
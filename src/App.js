import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/nav";
// import Landing from "./components/landing";
import TrafficForm from "./components/trafficform";
import Footer from "./components/footer";
import { useState } from "react";
import './App.css';
import Maps from './pages/map';
import Hero from "./pages/hero";
import './pages/hero.css'
import Landing from "./components/landing";
import Updateform from "./pages/updatetraffic";


function App() {
  const [routeInfo, setRouteInfo] = useState(null);

  const handleTrafficCheck = (formData) => {
    // Simulate: If "Nairobi CBD" is destination → heavy traffic
    if (formData.destination.toLowerCase().includes("nairobi")) {
      setRouteInfo({
        traffic: true,
        message: "Heavy traffic detected! 🚦",
        alternative: "Use Ngong Road instead of Uhuru Highway."
      });
    } else {
      setRouteInfo({
        traffic: false,
        message: "No traffic detected ✅",
        alternative: null
      });
    }
  };

  return (
    <Router>
      <Navbar />
      <Hero/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/maps" element={<Maps/>}/>
          <Route path='/update' element={<Updateform/>}/>
          <Route 
            path="/trafficform" 
            element={
              <>
                <TrafficForm onCheckTraffic={handleTrafficCheck} />
                {routeInfo && (
                  <div className="route-info">
                    <p>{routeInfo.message}</p>
                    {routeInfo.traffic && (
                      <button onClick={() => alert(routeInfo.alternative)}>
                        Show Alternative Route
                      </button>
                    )}
                  </div>
                )}
              </>
            } 
          />
        </Routes>
      </div>
      
      <Footer />
    </Router>
  );
}

export default App;


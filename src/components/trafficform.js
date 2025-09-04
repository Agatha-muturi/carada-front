import { useState } from "react";


function TrafficForm({ onCheckTraffic }) {
  const [formData, setFormData] = useState({
    currentLocation: "",
    destination: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCheckTraffic(formData); // Pass data up to parent (App.js)
  };

  return (
    <div className="form-container">
      <h2>Check Traffic & Routes</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          name="currentLocation"
          placeholder="Enter your current location"
          value={formData.currentLocation}
          onChange={handleChange}
          required
        />
        <input 
          type="text"
          name="destination"
          placeholder="Enter your destination"
          value={formData.destination}
          onChange={handleChange}
          required
        />
        <button type="submit">Check Traffic</button>
      </form>
    </div>
  );
}

export default TrafficForm;

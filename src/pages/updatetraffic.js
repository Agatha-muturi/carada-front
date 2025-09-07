import { useState } from "react";
import  getAlternativeRoute from "../api/ors";

const Updateform=({ onUpdateAdded })=>{
  const [location, setLocation] = useState("");
  const [cause, setCause] = useState("");
  const [photo, setPhoto] = useState(null);

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("location", location);
      formData.append("cause", cause);
      if (photo) formData.append("photo", photo);

      const res = await fetch(`${ getAlternativeRoute}/updates`, {
        method: "POST",
        body: formData,
      });

      const newUpdate = await res.json();
      onUpdateAdded(newUpdate); // refresh UI immediately

      setLocation("");
      setCause("");
      setPhoto(null);
    } catch (err) {
      console.error("Failed to submit update:", err);
    }
  };
  return (
    <div className="form-container">
      {/* <p className="foorm">kindly update us on what's happenening on the roads where you are</p> */}
      <form onSubmit={handleSubmit} className="update-form">
        <input
          className="text"
          type="text"
          placeholder="Enter location eg, Thika road,survey"
          value={Location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          className="text"
          type="text"
          placeholder="Enter cause of traffic eg accident, roadblock,stalled bus"
          value={cause}
          onChange={(e) => setCause(e.target.value)}
        />
        <input
          className="file"
          type="file"
          accept="image/*"
          onChange={(e) => setPhoto(e.target.value)}
        />
        <button type="submit" className="form-btn">
          post update
        </button>
      </form>
    </div>
  );
}
export default Updateform;

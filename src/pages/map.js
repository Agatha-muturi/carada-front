// src/pages/Maps.js
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./map.css";

function Maps() {
  return (
    <div className="maps-container">
      <h1>Car Rada Live Traffic 🛣️</h1>
      <p>
        View real-time traffic updates and discover alternative routes shared by motorists.  
      </p>

      <div className="map-box">
        <MapContainer
          center={[-1.286389, 36.817223]} // Nairobi coordinates
          zoom={13}
          scrollWheelZoom={true}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={[-1.286389, 36.817223]}>
            <Popup>
              🚗 Nairobi CBD – Example traffic marker.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default Maps;

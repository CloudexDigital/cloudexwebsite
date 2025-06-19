import React from "react";
import "../styles/Waypoint.css";

const Waypoint = ({ title, desc, icon }) => {
  return (
    <div className="waypoint">
      <div className="planet">
        <span className="planet-icon">{icon}</span>
      </div>
      <div className="planet-label">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Waypoint;

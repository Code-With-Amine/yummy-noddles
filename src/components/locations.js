import React from "react";
import { locations } from "../Data/locationsData";

function Locations() {
  return (
    <>
    <h1 className="locations--header">Locations</h1>
    <div className="locations-container">
  
      {locations.map(({ cover, title, location }) => 
        <div className="location">
          <img src={cover} alt="location image" className="location--image"/>
          <h3 className="location--title">{title}</h3> 
          <p className="location--place">{location}</p>
        </div>
      )}
    </div>
    </>
  );
}

export default Locations;

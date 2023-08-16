import React from "react";
import { locations } from "../Data/locationsData";

function Locations() {

  let animateNumber = 0;
  let locartionClassName = "location location__animate-"

  const setClassName = ()=>{
    locartionClassName = "location location__animate-"
    locartionClassName += ++animateNumber
    return locartionClassName
  }
  return (
    <>
      <h1 className="locations--header">Locations</h1>
      <div className="locations-container">
        {locations.map(({ cover, title, location }) => (

            <div className={locartionClassName = setClassName()}>
              <img
                src={cover}
                alt={`location-${animateNumber}`}
                className="location--image"
              />
              <h3 className="location--title">{title}</h3>
              <p className="location--place">{location}</p>
            </div>

        ))}
      </div>
    </>
  );
}

export default Locations;

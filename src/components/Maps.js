import React from "react";
import { useState } from "react";
import { maps } from "../Data/Maps";
import "../styles/maps.scss";

function Maps() {
  const [currentMap, setCurrentMap] = useState(maps[0].map);

  const handleClick = (event, map) => {
    const mapLocationInfos = document.querySelectorAll(".mapLocation-info");
    mapLocationInfos.forEach((element) => {
      element.classList.remove("mapLocation-info__hightlight");
    });
    setCurrentMap(map);
    event.currentTarget.classList.add("mapLocation-info__hightlight");
  };

  return (
    <div className="locations-container">
      <div className="locations-details">
        {maps.map(({ title, location, map }) => (
          <div
            className={`mapLocation-info ${title === 'Yummy noodle' && 'mapLocation-info__hightlight'}`}
            onClick={(event) => handleClick(event, map)}
          >
            <h2 className="mapLocation-info--title">{title}</h2>
            <p className="mapLocation-info--location">{location}</p>
          </div>
        ))}
      </div>

      <div className="Map">
        <div dangerouslySetInnerHTML={{ __html: currentMap }} />
      </div>
    </div>
  );
}

export default Maps;

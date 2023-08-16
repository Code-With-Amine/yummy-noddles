import React, { useEffect } from "react";
import { locations } from "../Data/locationsData";

function AnimateLocationOnScroll() {
  useEffect(() => {
    const locationElements = document.querySelectorAll(".location");

    const locationObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          entry.target.style.animationDelay = `${(index + 1) * 100}ms`;

          entry.target.classList.add("animate");
        }
      });
    });

    locationElements.forEach((location) => {
      locationObserver.observe(location);
    });
  }, []);
}

function Locations() {
  AnimateLocationOnScroll();
  let animateNumber = 0;

  const setClassName = () => {
    animateNumber++;
    return `location location__animate-${animateNumber}`;
  };

  return (
    <>
      <h1 className="location locations--header locations--header__animate">
        Locations
      </h1>
      <div className="locations-container">
        {locations.map(({ cover, title, location }, index) => (
          <div key={index} className={setClassName()}>
            <img
              src={cover}
              alt={`location-${index}`}
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

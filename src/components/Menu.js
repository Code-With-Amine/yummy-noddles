import React from "react";
import logo from '../images/logo.png'
import '../styles/menu.scss'

import { Starters, MainCourse, desserts, drinks } from "../Data/MenuData";

function Menu() {
  return (
    <div className="MenuSec">
      <h1 className="MenuSec--title">Menu</h1>
      <div className="MenuContent">
      <img src={logo} alt="logo" className="MenuContent--logo" />

        <h3 className="MenuContent--header">Starters</h3>
        {Starters.id.map(({ dish, description, imagURL }) => (
          <>
            <div className="MenuContentContainer">
              <img src={imagURL} alt={dish} key={dish} className="MenuContent--image" />
              <h2 className="MenuContent--dishName">{dish}</h2>
            </div>
            <p className="MenuContent--description">{description}</p>
          </>
        ))}
        <h3 className="MenuContent--header">Main Course</h3>
        {MainCourse.id.map(({ dish, description, imagURL }) => (
          <>
            <div className="MenuContentContainer">
              <img src={imagURL} alt={dish} key={dish} className="MenuContent--image" />
              <h2 className="MenuContent--dishName">{dish}</h2>
            </div>
            <p className="MenuContent--description">{description}</p>
          </>
        ))}
        
        <h3 className="MenuContent--header">Desserts</h3>
        {desserts.id.map(({ dish, description, imagURL }) => (
          <>
            <div className="MenuContentContainer">
              <img src={imagURL} alt={dish} key={dish} className="MenuContent--image" />
              <h2 className="MenuContent--dishName">{dish}</h2>
            </div>
            <p className="MenuContent--description">{description}</p>
          </>
        ))}

    <h3 className="MenuContent--header">Drinks</h3>
        {drinks.id.map(({ dish, imagURL }) => (
            <div className="MenuContentContainer">
              <img src={imagURL} alt={dish} key={dish} className="MenuContent--image" />
              <h2 className="MenuContent--dishName">{dish}</h2>
            </div>

        ))}

      </div>
    </div>
  );
}

export default Menu;

import React from "react";

function Dishes({
  description,
  price,
  dish,
  imagURL,
  ShowDishInfo,
  hoveredElContent,
  handelMouseLeave,
}) {
  return (
    <div
      className="SelectedImages-container"
      data-dish={dish}
      onMouseEnter={(event) =>
        ShowDishInfo(event.currentTarget, description, price, dish, imagURL)
      }
      onMouseLeave={(event) => handelMouseLeave(event.currentTarget)}
    >
      {hoveredElContent}
      <div className="SelectedImages__bgColor"></div>

      <img
        src={imagURL}
        alt={dish}
        className="SelectedImages--DishImage"
        key={dish}
      />
    </div>
  );
}

export default Dishes;

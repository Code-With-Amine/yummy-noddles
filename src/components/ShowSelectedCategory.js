import Dishes from "./Dishes";
import { useState } from "react";

const smallerDishes = (Hovered) => {
  const dishes = document.querySelectorAll(".SelectedImages-container");
  dishes.forEach((dish) => {
    // if it's not the hovered element then make it smaller
    if (dish.dataset.dish !== Hovered.dataset.dish) {
      dish.classList.toggle("SelectedImages__Smallerscal");
    }
  });
};

const ShowSelectedCategory = ({ SelcetCategory, setChosenCat }) => {
  const addToCart = (dishName, price, image) => {
    const newDish = {
      name: dishName,
      price: price,
      image: image,
      quantity: 1,
    };

    setChosenCat((prevChosenCat) => [...prevChosenCat, newDish]); // adding the new chosen dish to the carts
  };

  const ShowDishInfo = (
    HoveredElement,
    description,
    price,
    dishName,
    image
  ) => {
    const BackgoundCercle = HoveredElement.querySelector(
      ".SelectedImages__bgColor"
    );

    setContent(
      <div className="SelectedImages--DishInfo">
        <p>{description === undefined ? "" : description}</p>
        <button
          className="SelectedImages--DishInfo-Btn"
          onClick={() => addToCart(dishName, price, image)}
        >
          Add
        </button>
      </div>
    );

    BackgoundCercle.setAttribute("id", "d-none");
    HoveredElement.style.backgroundColor = "#FE5D03";
    // make the other dishes smaller campared to the hovered dish
    smallerDishes(HoveredElement);
  };


  const handelMouseLeave = (HoveredElement) => {
   smallerDishes(HoveredElement);
    HoveredElement.style.backgroundColor = "";
    HoveredElement.querySelector(".SelectedImages__bgColor").setAttribute(
      "id",
      "d-block"
    );
    setContent(null);
  };

  const [hoveredElContent, setContent] = useState(null);

  return (
    <div className="SelectedImages">
      {SelcetCategory.id.map(({ imagURL, dish, description, price, key }) => (
        <Dishes
          imagURL={imagURL}
          dish={dish}
          description={description}
          price={price}
          key={key}
          ShowDishInfo={ShowDishInfo}
          hoveredElContent={hoveredElContent}
          handelMouseLeave={handelMouseLeave}
        />
      ))}
    </div>
  );
};

export default ShowSelectedCategory;

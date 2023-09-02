import React, { useEffect, useState } from "react";

function Card({ chosenCat, setChosenCat }) {
  //  I stored the chosenCat in a uniqueItems so that i would make the changes to that constant than update the chosenCat via setChosenCat
  const [uniqueItems, setUniqueItems] = useState([]);

  // I calculate and update unique items when chosenCat changes
  useEffect(() => {
    const uniqueDishes = chosenCat.reduce((acc, currentItem) => {
      if (!acc.some((item) => item.name === currentItem.name)) {
        return [...acc, currentItem];
      }
      return acc;
    }, []);

    setUniqueItems(uniqueDishes);
  }, [chosenCat]);

  const handleQuantityChange = (index, increment) => {
    const updatedItems = [...uniqueItems];
    updatedItems[index].quantity += increment;
    setChosenCat(updatedItems);
  };

  const handleDelete = (index) => {
    const updatedItems = [...uniqueItems];
    updatedItems.splice(index, 1);
    setChosenCat(updatedItems);
  };

  const totalPrice = uniqueItems.reduce(
    (accumulator, currentItem) =>
      accumulator + currentItem.price * currentItem.quantity,
    0
  );

  return (
    <div className="cart-container">
      <div className="cart">
        <table>
          <tbody>
            {uniqueItems.length === 0 ? (
              <tr>
                <td colSpan="7" className="cart__empty">
                  Your cart is empty
                </td>
              </tr>
            ) : (
              uniqueItems.map((cat, index) => (
                <tr className="cart--row" key={index}>
                  <td>
                    <img
                      className="cart--image"
                      src={cat.image}
                      alt={cat.name}
                    />
                  </td>
                  <td className="cart--dishName">{cat.name}</td>
                  <td className="cart--quantity">{cat.quantity}</td>
                  <td className="cart--plusIcon">
                    <i
                      className="fa-solid fa-plus"
                      onClick={() => handleQuantityChange(index, 1)}
                    ></i>
                  </td>
                  <td className="cart--minusIcon">
                    <i
                      className="fa-solid fa-minus"
                      onClick={() => handleQuantityChange(index, -1)}
                    ></i>
                  </td>
                  <td className="cart--trash">
                    <i
                      className="fa-solid fa-trash-can"
                      onClick={() => handleDelete(index)}
                    ></i>
                  </td>
                  <td className="cart--totalDishPrice">
                    ${cat.price * cat.quantity}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className={uniqueItems.length !== 0 ? `cart--total` : "d-none"}>
        ${totalPrice.toFixed(2)}
      </div>
    </div>
  );
}

export default Card;

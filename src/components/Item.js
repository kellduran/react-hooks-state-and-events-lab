import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false)
  const itemClass = isInCart ? "in-cart" : ""
  function handleCartClick (){
    setIsInCart((isInCart)=> !isInCart)
  }

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleCartClick} className={isInCart? "remove" : "add" }>{isInCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;

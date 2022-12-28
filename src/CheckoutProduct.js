import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating }) {
  //console.log("Image is ", image);
  const [{basket},dispatch] = useStateValue();

  const removeItem = () =>{
    dispatch({
      type: "DELETE_ITEM",
      id: id,
    })
    console.log(id);
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_image" src={image} />
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>

        <p className="checkoutProduct_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removeItem}> Remove From Basket </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;

import React from "react";
import "./Checkout.css";
import banner from "./great_indian_festival.jpg";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img className="checkout_ad" src={banner} alt="sale banner" />
        <div>
          <h1 className="checkout_title"> Your Shopping Baskest </h1>
          {
            basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              price={item.price}
              rating={item.rating}
              image="https://rukminim1.flixcart.com/image/416/416/k2jbyq80pkrrdj/mobile-refurbished/x/j/s/iphone-11-128-d-mwm02hn-a-apple-0-original-imafkg242ugz8hwc.jpeg?q=70"
            />
          ))}
        </div>
      </div>
      <div className="checkout_right">
        <h2>The Subtotal will go here</h2>
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;

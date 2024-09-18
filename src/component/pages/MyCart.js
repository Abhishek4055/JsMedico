import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";
import Button from "../utils/Button";

function MyCart() {
  const { cartItem } = useSelector((state) => state.cart);
  if (cartItem.length === 0) {
    return (
      <>
        <div className="card-container ">
          <h2> No Item Found </h2>
          <p>
            Add the Itme in the Cart...
            <MdOutlineShoppingCart size={30} />
          </p>
        </div>
      </>
    );
  }

  console.log(cartItem);

  return (
    <>
      {cartItem.map((el, i) => {
        return (
          <section key={i} className="flex card flex-justfy-around">
            <div className="cart-container flex">
              <div>
                <img className="cart-image" src={el?.imageUrl} alt={el?.type} />
              </div>
              <div className="cart-item">
                <h2>Name :{el?.type}</h2>
                <h4>Rs:{el?.price}</h4>
              </div>
              <div className="flex flex-justfy-around ">
                <Button className="secondery-btn">+</Button>
                <Button className="secondery-btn"> - </Button>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}

export default MyCart;

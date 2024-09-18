import React from "react";
import { dummyEquipment } from "../dummyData";
import Button from "../utils/Button";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCartItem } from "../../redux/cartSlice";

const EquipmentItems = () => {
  const { equipmentName } = useParams();
  const disapatch = useDispatch();
  const { cartItem } = useSelector((state) => state.cart);
  const equipemntItem = dummyEquipment.filter(
    (el, index) => el.type === equipmentName
  );
  const addToCartHandeler = () => {
    const arr = [...cartItem];
    arr.push(equipemntItem[0]);
    disapatch(setCartItem(arr));
  };

  console.log(cartItem.length);
  return (
    <section className="flex card flex-justfy-around">
      <div className="cart-container flex">
        <div>
          <img
            className="equipment-img"
            src={equipemntItem?.[0]?.imageUrl}
            alt={equipemntItem?.[0]?.type}
          />
          <div className="flex flex-justfy-around ">
            <Button className="secondery-btn" onClick={addToCartHandeler}>
              Add to Cart
            </Button>
            <Button className="primery-btn"> Buy Now </Button>
          </div>
        </div>
        <div className="cart-item">
          <h2>Name :{equipemntItem?.[0]?.type}</h2>
          <h4>Rs:{equipemntItem?.[0]?.price}</h4>
        </div>
      </div>
    </section>
  );
};
export default EquipmentItems;

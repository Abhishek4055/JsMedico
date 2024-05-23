import React from "react";

const Card = ({ item, cardStyle }) => {
  return (
    <>
      <img src={item.imageUrl} alt={item.type} className="equipment-img" />
      <div className={cardStyle}>
        <h4>
          <b>{item.type}</b>
        </h4>
        {item.brand && <p>{item.brand}</p>}
      </div>
    </>
  );
};

export default Card;

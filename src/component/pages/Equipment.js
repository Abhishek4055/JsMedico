import React, { useState } from "react";

import Card from "../utils/Card";
import { dummyEquipment } from "../dummyData";
// import Input from "../utils/InputComp";
const Equipment = () => {
  return (
    <section className="container flex card flex-justfy-around">
      {dummyEquipment.map((item, index) => {
        return (
          <div
            className="card-container flex-direction-colm"
            key={item.id}
            // onClick={() => onCardClick("equipment", item)}
          >
            <Card
              item={item}
              cardStyle={"flex card-text-container flex-direction-colm"}
            />
          </div>
        );
      })}
    </section>
  );
};

export default Equipment;

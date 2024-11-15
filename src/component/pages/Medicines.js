import React, { useEffect, useState } from "react";
import { dummyMedicins } from "../dummyData";
import Card from "../utils/Card";

const Medicines = () => {
  const [medicine, setMedicine] = useState([]);
  useEffect(() => {
    setMedicine(dummyMedicins);
  }, []);
  const onCardClick = (type, subitem) => {
    console.log("subitem", subitem);
  };
  return (
    <>
      <section className="container flex card flex-justfy-around  ">
        {medicine.map((item, index) => {
          return (
            <div
              className="card-container flex-direction-colm"
              key={item.id}
              onClick={() => onCardClick("equipment", item)}
            >
              <Card
                item={item}
                cardStyle={"flex card-text-container flex-direction-colm"}
              />
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Medicines;

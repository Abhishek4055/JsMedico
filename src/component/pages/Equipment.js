import React from "react";

import Card from "../utils/Card";
import { dummyEquipment } from "../dummyData";
import { Link, Outlet, useParams } from "react-router-dom";

const Equipment = () => {
  const { equipmentName } = useParams();
  console.log(equipmentName, "parem");

  return (
    <>
      {!equipmentName && (
        <section className="flex card flex-justfy-around">
          {dummyEquipment.map((item, index) => {
            return (
              <Link to={`/equipment/${item.type}`}>
                <div
                  className="card-container flex-direction-colm"
                  key={item.id}
                >
                  <Card
                    item={item}
                    cardStyle={"flex card-text-container flex-direction-colm"}
                  />
                </div>
              </Link>
            );
          })}
        </section>
      )}
      <Outlet />
    </>
  );
};

export default Equipment;

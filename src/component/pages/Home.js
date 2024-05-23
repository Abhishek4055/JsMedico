import React, { useState } from "react";
import OverlayRight from "../utils/Overlay";
import { useDispatch, useSelector } from "react-redux";
import { setIsOpenInfoOverlay } from "../../redux/slice";

import Card from "../utils/Card";
import Equipment from "./Equipment";
import Medicines from "./Medicines";
import About from "./About";

const Home = () => {
  const dispatch = useDispatch();
  const [type, setType] = useState("equipment");
  const { isOpenInfoOverlay } = useSelector((state) => state.users);

  const closeOverlayHandler = () => {
    dispatch(setIsOpenInfoOverlay(false));
  };

  return (
    <section className="constainer flex card flex-justfy-start  ">Home</section>
  );
};

export default Home;

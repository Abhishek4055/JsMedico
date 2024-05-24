import React, { useEffect, useRef, useState } from "react";
import useTimer from "../utils/useTimer";
import "./about.css";
function About() {
  const { countDown, reset } = useTimer(90);

  const formetTime = (time) => {
    let minutes = Math.floor(time / 60);
    let second = Math.floor(time % 60);

    if (minutes < 10) minutes = "0" + minutes;
    if (second < 10) second = "0" + second;
    return minutes + " " + ":" + " " + second;
  };

  return (
    <section className="container about">
      <div>
        <h2>{formetTime(countDown)}</h2>
      </div>
      <button className="secondery-btn" onClick={reset}>
        Reset
      </button>
    </section>
  );
}

export default About;

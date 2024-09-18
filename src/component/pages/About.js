import React from "react";
import useTimer from "../customHooks/useTimer";
import "./about.css";
import Button from "../utils/Button";
function About() {
  const { countDown, reset, stop, start, isRunning } = useTimer(90);

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
      <div className="flex login-form">
        <Button className="secondery-btn" onClick={reset}>
          Reset
        </Button>
        <Button
          className={`primery-btn  ${isRunning ? "disabled-btn" : ""}`}
          onClick={stop}
          disabled={isRunning}
        >
          Stop
        </Button>
        <Button
          className={`primery-btn ${isRunning ? "" : "disabled-btn"}`}
          onClick={start}
          disabled={!isRunning}
        >
          Start
        </Button>
      </div>
    </section>
  );
}

export default About;

import React, { useEffect, useRef, useState } from "react";

function useTimer(time) {
  const [countDown, setCountDown] = useState(time);
  const timerId = useRef(null);

  useEffect(() => {
    timerId.current = setInterval(
      () => setCountDown((previous) => previous - 1),
      1000
    );
    return () => clearInterval(timerId.current);
  }, []);

  useEffect(() => {
    if (countDown <= 0) {
      clearInterval(timerId.current);
    }
  }, [countDown]);

  const reset = () => {
    setCountDown(time);
    // clearInterval(timerId.current);
  };

  return { countDown, reset };
}

export default useTimer;

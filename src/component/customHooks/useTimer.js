import { useEffect, useRef, useState } from "react";

function useTimer(time) {
  const [countDown, setCountDown] = useState(time);
  const [isRunning, setIsRunning] = useState(false);

  const timerId = useRef(null);

  useEffect(() => {
    if (!isRunning) {
      timerId.current = setInterval(
        () => setCountDown((previous) => previous - 1),
        1000
      );
    } else {
      clearInterval(timerId.current);
    }
    return () => clearInterval(timerId.current);
  }, [isRunning]);

  //   useEffect(() => {
  //     if (countDown <= 0) {
  //       clearInterval(timerId.current);
  //     }
  //   }, [countDown]);

  const reset = () => {
    setCountDown(time);
  };
  const stop = () => {
    if (!isRunning) {
      setIsRunning(true);
    }
  };

  const start = () => {
    if (isRunning) {
      setIsRunning(false);
    }
  };

  return { countDown, reset, stop, start, isRunning };
}

export default useTimer;

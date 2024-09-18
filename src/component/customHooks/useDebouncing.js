import { useEffect, useState } from "react";

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cleanup function to clear the timeout if value or delay changes
    return () => {
      clearTimeout(timerId);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;

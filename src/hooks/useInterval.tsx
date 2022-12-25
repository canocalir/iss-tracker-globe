import { useEffect, useState } from "react";

const useInterval = (val: number) => {
  const [value, setValue] = useState(0);

  const slidingValue = val * 200

  useEffect(() => {
    const interval = setInterval(() => {
      value < slidingValue ? setValue((current) => current + 10) : setValue(0);
    }, 1000);
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, []);
  return { value };
};

export default useInterval;

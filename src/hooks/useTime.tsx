import { useEffect, useState } from "react";

const useTime = () => {
  const getDate = () => new Date();
  const orderedTime = () => {
    return getDate().toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };
  const [timeNow, setTimeNow] = useState<string>(orderedTime);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeNow(orderedTime);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return { timeNow };
};

export default useTime;

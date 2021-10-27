import { useEffect, useState } from "react";

const useCounter = (farwards) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setInterval(() => {
      if (farwards) {
        setCounter((prevCount) => prevCount + 1);
      } else {
        setCounter((prevCount) => prevCount - 1);
      }
    }, 1000);
  }, []);

  return counter;
};

export default useCounter;

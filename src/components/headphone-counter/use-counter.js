import { useState, useCallback } from "react";

import styles from "./headphone-counter.module.css";

export const useCount = ({ min = 0, max = 5 } = {}) => {
  const [value, setValue] = useState(min);

  const increment = useCallback(() => {
    // setValue(Math.min(value + 1, max));
    setValue((currentValue) => {
      return Math.min(currentValue + 1, max);
    });
  }, [max]);

  // const increment = () => setValue(value + 1);
  const decrement = useCallback(() => {
    // setValue(Math.max(value - 1, min));
    setValue((currentValue) => {
      return Math.max(currentValue - 1, min);
    });
  }, [min]);

  return {
    value,
    increment,
    decrement,
  };
};

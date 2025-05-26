import { useCallback, useEffect, useRef, useState } from "react";
import { Counter } from "../counter/counter";
import { useCount } from "./use-counter";

import styles from "./headphone-counter.module.css";
import classNames from "classnames";

export const HeadphoneCounter = ({ colorViewVariant = "default" }) => {
  const [max, setMax] = useState(100);
  const { value, increment, decrement } = useCount({ max });

  const sendAnalytics = useCallback(() => {
    console.log("send analytics");
  }, []);

  const buttonRef = useRef(null); // { current: null }

  const handleClick = () => {
    setMax(10);
  };

  useEffect(() => {
    increment();
  }, [increment]);

  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(increment, 500);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [increment]);

  return (
    <div
      // className={`${
      //   colorViewVariant === "default" ? styles.default : styles.active
      // }`}
      className={classNames(styles.root, styles.root1, styles.root2, {
        [styles.default]: colorViewVariant === "default",
        [styles.active]: colorViewVariant === "active",
      })}
    >
      <Counter value={value} increment={increment} decrement={decrement} />
      <button ref={sendAnalytics} onClick={handleClick}>
        setMax
      </button>
      <button
        onClick={() => {
          clearInterval(intervalRef.current);
        }}
      >
        stop interval
      </button>
    </div>
  );
};

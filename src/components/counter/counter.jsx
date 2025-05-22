import { useEffect } from "react";
import { useCount } from "./use-counter";

const TEXT = "text";

export const Counter = () => {
  const { value, increment, decrement } = useCount();

  // useEffect(() => {
  //   console.log("mount");

  //   return () => {
  //     console.log("unmount");
  //   };
  // }, []);

  useEffect(() => {
    console.log(`effect - ${value}`);

    return () => {
      console.log(`cleanup - ${value}`);
    };
  }, [value]);

  useEffect(() => {
    console.log(TEXT);

    return () => {
      console.log(TEXT);
    };
  }, []);

  return (
    <div>
      <button onClick={increment}>+</button>
      {value}
      <button onClick={decrement}>-</button>
    </div>
  );
};

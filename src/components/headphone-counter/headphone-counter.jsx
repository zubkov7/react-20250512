import { Counter } from "../counter/counter";
import { useCount } from "./use-counter";

export const HeadphoneCounter = ({ headphoneId }) => {
  const { value, increment, decrement } = useCount(headphoneId);

  return <Counter value={value} increment={increment} decrement={decrement} />;
};

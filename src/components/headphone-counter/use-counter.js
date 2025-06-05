import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  selectItemAmountById,
} from "../../redux/entities/cart/slice";

export const useCount = (headphoneId) => {
  const dispatch = useDispatch();

  const amount = useSelector((state) =>
    selectItemAmountById(state, headphoneId)
  );
  const increment = useCallback(
    () => dispatch(addToCart(headphoneId)),
    [dispatch, headphoneId]
  );

  const decrement = useCallback(
    () => dispatch(removeFromCart(headphoneId)),
    [dispatch, headphoneId]
  );

  return {
    value: amount,
    increment,
    decrement,
  };
};

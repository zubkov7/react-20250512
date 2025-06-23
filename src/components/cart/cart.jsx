"use client";

import { selectCartItemsIds } from "@/redux/entities/cart/slice";
import { CartItem } from "../cart-item/cart-item";
import { useSelector } from "react-redux";
import { use } from "react";
import { AuthContext } from "../auth-context";

export const Cart = ({ headphones }) => {
  const items = useSelector(selectCartItemsIds);

  const { auth } = use(AuthContext);

  const { isAuthorized } = auth;

  if (!items.length || !isAuthorized) {
    return null;
  }

  return (
    <div>
      <h3>Cart</h3>
      <ul>
        {items.map((id) => (
          <li key={id}>
            <CartItem id={id} headphones={headphones} />
          </li>
        ))}
      </ul>
    </div>
  );
};

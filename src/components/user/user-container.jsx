"use client";

import { use } from "react";
import { User } from "./user";
import { UsersContext } from "../users-context";

export const UserContainer = ({ id }) => {
  const users = use(UsersContext);

  console.log(users);

  const user = users?.find((user) => user.id === id);

  if (!user) {
    return null;
  }

  return <User name={user.name} />;
};

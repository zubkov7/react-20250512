"use client";

import { User } from "./user";

export const UserContainer = () => {
  const data = null;

  if (!data?.name) {
    return null;
  }

  return <User name={data.name} />;
};

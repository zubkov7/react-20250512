"use client";

import classNames from "classnames";
import styles from "./button.module.css";
import { use } from "react";
import { ThemeContext } from "../theme-context";
import { useFormStatus } from "react-dom";

export const Button = ({
  title,
  onClick,
  disabled,
  size = "500",
  className,
}) => {
  const { theme } = use(ThemeContext);
  const { pending } = useFormStatus();

  return (
    <button
      className={classNames(styles.root, className, {
        [styles.size500]: size === "500",
        [styles.size400]: size === "400",
        [styles.dark]: theme === "dark",
        [styles.light]: theme === "light",
      })}
      disabled={disabled || pending}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

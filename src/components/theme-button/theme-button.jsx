import { useContext } from "react";
import { Button } from "../button/button";
import { ThemeContext } from "../theme-context";

export const ThemeButton = () => {
  const { setTheme } = useContext(ThemeContext);

  const handleClick = () =>
    setTheme((current) => (current === "dark" ? "light" : "dark"));

  return <Button onClick={handleClick} title='toggle theme' />;
};

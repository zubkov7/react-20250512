import { ThemeButton } from "../theme-button/theme-button";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <span>Headphones shop</span>
      <ThemeButton />
    </header>
  );
};

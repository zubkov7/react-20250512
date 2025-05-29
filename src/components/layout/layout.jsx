import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { ProgressBar } from "../progress-bar/progress-bar";

import styles from "./layout.module.css";

export const Layout = ({ children, sidebar }) => {
  return (
    <div className={styles.root}>
      {sidebar}
      <ProgressBar />
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

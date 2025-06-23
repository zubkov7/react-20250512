"use client";

import classNames from "classnames";

import styles from "./tab-link.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const TabLink = ({ children, href }) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={classNames(styles.root, {
        [styles.isActive]: pathname === href,
      })}
    >
      {children}
    </Link>
  );
};

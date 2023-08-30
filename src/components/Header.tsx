"use client";

import styles from "@/styles/components/Header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const currentRoute = usePathname();

  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Soleil</h1>
      <h2 className={styles.description}>TV Show Search App</h2>

      <nav>
        <Link
          className={`${styles.link} ${
            currentRoute == "/" ? styles.activeLink : ""
          }`}
          href="/"
        >
          Search
        </Link>
        <Link
          className={`${styles.link} ${
            currentRoute == "/login" ? styles.activeLink : ""
          }`}
          href="/login"
        >
          Login
        </Link>
      </nav>
    </header>
  );
}

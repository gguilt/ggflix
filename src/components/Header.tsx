"use client";

import styles from "@/styles/components/Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const currentRoute = usePathname();

  return (
    <header className={styles.header}>
      <Image
        className={styles.logo}
        src="/logo.svg"
        alt="Soleil Logo"
        width={320}
        height={128}
      />
      <h1 className={styles.description}>TV Show Search App</h1>

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

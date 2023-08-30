"use client";

import styles from "@/styles/Home.module.css";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showData, setShowData] = useState([]);

  const searchSubmit = async (event: any) => {
    event.preventDefault();
    const res = await axios.get(
      `https://api.tvmaze.com/search/shows?q=${searchTerm}`
    );
    setShowData(res.data);
  };

  const setInput = (event: any) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.logo}>Soleil</h1>
        <h2 className={styles.description}>TV Show Search App</h2>

        <nav>
          <Link className={styles.link} href="/">
            Search
          </Link>
          <Link className={styles.link} href="/login">
            Login
          </Link>
        </nav>
      </header>

      <main className={styles.main}>
        <form className={styles.form} onSubmit={searchSubmit}>
          <input
            placeholder="Enter TV Show Name"
            value={searchTerm}
            onChange={setInput}
          ></input>
          <button>Search</button>
        </form>

        <div className={styles.theList}>
          {showData.map((e: any) => {
            return (
              <div className={styles.listItem} key={e.show.id}>
                <h3 className={styles.listItemHeader}>{e.show.name}</h3>
                {e.show.image && (
                  <img alt={e.show.name} src={e.show.image.medium} />
                )}
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}

"use client";

import styles from "@/styles/Home.module.css";
import { useState } from "react";
import axios from "axios";
import Header from "@/components/Header";

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
      <Header />

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

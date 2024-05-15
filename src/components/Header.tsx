import React from "react";
import styles from "./Header.module.css";
import logoIgnite from "../assets/logoIgnite.svg";

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={logoIgnite} alt="Logo do Ignite" />
    </header>
  );
}

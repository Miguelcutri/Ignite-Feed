import React from "react";
import "./global.css";


import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

import styles from './App.module.css'

function App() {
  return (
  <div>
    <Header />
    <div className={styles.wrapper}>
      <Sidebar/>
      <main>
        <h1>Post</h1>
        <h1>Post</h1>
      </main>
    </div>
  </div>
  );
}

export default App;

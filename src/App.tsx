import React from "react";
import "./global.css";


import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

import styles from './App.module.css'
import Post from "./components/Post/Post";

function App() {
  return (
  <div>
    <Header />
    <div className={styles.wrapper}>
      <Sidebar/>
      <main>
        <Post />
        <Post />
        <Post />
      </main>
    </div>
  </div>
  );
}

export default App;

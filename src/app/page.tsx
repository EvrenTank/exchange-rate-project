'use client';
import styles from "./page.module.css";
import Menu from "../../components/menu/menu";
import MainComponent from "../../components/mainComponent/mainComponent";
import AnaSayfa from "../../components/ana-sayfa/anaSayfa";
import { useState } from "react";
 const Home = () => {
  const [selectedpage,setSelectedpage] = useState<string>("Ana Sayfa");
  return (
    <main className={styles.main}>
      <MainComponent
      selectedpage={selectedpage} 
      setSelectedpage={setSelectedpage}></MainComponent>
      <AnaSayfa/>
    </main>
  );
}

export default Home;
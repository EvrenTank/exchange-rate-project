'use client';
import styles from "../page.module.css";
import MainComponent from "../../../components/mainComponent/mainComponent";
import Converter from "../../../components/converter/converter";
import { useState } from "react";
 const Page = () => {
    const [selectedpage,setSelectedpage] = useState<string>("Dönüştür");

  return (
    <main className={styles.main}>
      <MainComponent selectedpage={selectedpage} 
      setSelectedpage={setSelectedpage}></MainComponent>
      <Converter/>
    </main>
  );
}

export default Page;
import styles from "./page.module.css";
import Menu from "../../components/menu/menu";
import MainComponent from "../../components/mainComponent/mainComponent";
import AnaSayfa from "../../components/ana-sayfa/anaSayfa";
 const Home = () => {
  return (
    <main className={styles.main}>
      <MainComponent></MainComponent>
      <AnaSayfa/>
    </main>
  );
}

export default Home;
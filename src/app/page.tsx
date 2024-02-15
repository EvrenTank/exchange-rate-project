import styles from "./page.module.css";
import Menu from "../../components/menu/menu";

 const Home = () => {
  return (
    <main className={styles.main}>
      <Menu></Menu>
    </main>
  );
}

export default Home;
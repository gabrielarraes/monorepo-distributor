import styles from './home.module.scss'
import { Outlet } from "react-router-dom";

export const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.navbar}></div>
      <div className={styles.contentContainer}>
        <Outlet></Outlet>
      </div>
    </div>
  );
}

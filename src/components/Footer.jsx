import { NavLink } from "react-router-dom";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <NavLink to="/">
        <h1>2meuru</h1>
      </NavLink>
    </footer>
  );
}

export default Footer;

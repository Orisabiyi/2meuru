import { NavLink } from "react-router-dom";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <NavLink to="/">
        <h1>2meuru</h1>
      </NavLink>

      <button>
        <a href="https://drive.google.com/file/d/103YfeYZzqM1wEgzX8cFRGan7iEl1Au71/view?usp=drivesdk">
          Download App
        </a>
      </button>
    </footer>
  );
}

export default Footer;

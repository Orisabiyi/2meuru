import styles from "./Nav.module.css";
function Nav() {
  return (
    <nav className={styles.nav}>
      <h1>2meuru</h1>
      <ul>
        <li>Home</li>
        <li>Features</li>
        <li>Benefits</li>
      </ul>
      <button>
        <a href="https://drive.google.com/file/d/103YfeYZzqM1wEgzX8cFRGan7iEl1Au71/view?usp=drivesdk">
          Download App
        </a>
      </button>
      <div className={styles.menuBar}></div>
    </nav>
  );
}

export default Nav;

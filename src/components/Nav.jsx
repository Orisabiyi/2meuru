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
      <button>Download App</button>
      <div className={styles.menuBar}></div>
    </nav>
  );
}

export default Nav;

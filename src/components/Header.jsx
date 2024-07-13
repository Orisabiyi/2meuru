import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div>
        <h1>
          <span>Empower Parents</span>
          <span> and Elevate Student Success</span>
        </h1>
        <p>
          Track Performance | Monitor Activities | Manage Payments Effortlessly
        </p>
        <button>Learn More</button>
      </div>
      <div>
        <img src="/images/hero.png" alt="hero-img" />
      </div>
    </header>
  );
}

export default Header;

import styles from "./Benefits.module.css";

function Benefits() {
  return (
    <section className={styles.benefit}>
      <div>
        <h3>Parent</h3>
        <p>Stay informed about your child education</p>
      </div>
      <div>
        <h3>For Schools</h3>
        <p>Streamline communication and administrative tasks</p>
      </div>
      <div>
        <h3>For Students</h3>
        <p>Recieve timely feedback and support</p>
      </div>
    </section>
  );
}

export default Benefits;

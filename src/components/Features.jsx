import styles from "./Features.module.css";

function Features() {
  return (
    <section className={styles.feature}>
      <figure>
        <div>
          <img src="images/" alt="" />
        </div>
        <h3>Track Student Scores</h3>
        <p>
          Parents can access detailed reports of their wards&apos; academi
          performance
        </p>
      </figure>

      <figure>
        <div>
          <img src="" alt="" />
        </div>
        <h3>Monitor Activities</h3>
        <p>
          Stay updated with your child&apos;s classroom activities and progress
        </p>
      </figure>

      <figure>
        <div>
          <img src="" alt="" />
        </div>
        <h3>Manage Payment</h3>
        <p>Simplify school fee payments and keep track of all transactions</p>
      </figure>
    </section>
  );
}

export default Features;

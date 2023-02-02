import styles from "./hero.module.css";

export default function Hero() {
  return (
    <section className={styles.section}>
      <article className={styles.greeting}>
        <p>Hi, I'm</p>
        <h1>Nathanel</h1>
      </article>
      <p>
        I design and develop websites for entrepreneurs, businesses, and
        professionals
      </p>
      <button className={styles.cta}>Contact me</button>
    </section>
  );
}

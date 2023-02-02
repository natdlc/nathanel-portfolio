import styles from "./about-item.module.css";

export default function AboutItem({ item }) {
  return (
    <article className={styles.article}>
      <h3>{item.title}</h3>
      <p className={styles.description}>{item.description}</p>
    </article>
  );
}

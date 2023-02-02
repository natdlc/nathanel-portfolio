import styles from "./about-item.module.css";

export default function AboutItem({ article }) {
  return (
    <article className={styles.article}>
      <h3>{article.title}</h3>
      <p className={styles.description}>{article.description}</p>
    </article>
  );
}

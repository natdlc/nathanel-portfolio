import styles from "./work-item.module.css";

export default function WorkItem({ item }) {
  return (
    <article className={styles.article}>
      <header className={styles.header}>
        <h2>{item.title}</h2>
        {item.isInProgress ? <h4>in progress</h4> : null}
      </header>
      <figure className={styles.figure}>
        {/* change this to next/image component once project is complete*/}
        <a href={item.url} target="_blank">
          <img
            src="https://via.placeholder.com/1920x1080"
            width={800}
            alt="placeholder image"
          />
        </a>
        <figcaption>{item.caption}</figcaption>
      </figure>
    </article>
  );
}

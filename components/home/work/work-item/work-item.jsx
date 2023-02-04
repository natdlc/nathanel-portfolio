import { InView } from "react-intersection-observer";
import styles from "./work-item.module.css";

export default function WorkItem({ item }) {
  const toggler = (inView) => (inView ? styles.shown : styles.hidden);

  return (
    <article id={item.id} className={styles.article}>
      <header className={styles.header}>
        <InView>
          {({ inView, ref }) => (
            <h2 ref={ref} className={toggler(inView)}>
              {item.title}
            </h2>
          )}
        </InView>
        {item.isInProgress ? (
          <InView>
            {({ inView, ref }) => (
              <h4 ref={ref} className={toggler(inView)}>
                in progress
              </h4>
            )}
          </InView>
        ) : null}
      </header>
      <figure className={styles.figure}>
        {/* change this to next/image component once project is complete*/}
        <InView>
          {({ inView, ref }) => (
            <a
              ref={ref}
              className={toggler(inView)}
              href={item.url}
              target="_blank"
            >
              <img
                src="https://via.placeholder.com/1920x1080"
                width={800}
                alt="placeholder image"
              />
            </a>
          )}
        </InView>
        <InView>
          {({ inView, ref }) => (
            <figcaption ref={ref} className={toggler(inView)}>
              {item.caption}
            </figcaption>
          )}
        </InView>
      </figure>
    </article>
  );
}

import { InView } from "react-intersection-observer";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <section className={styles.section}>
      <article className={styles.greeting}>
        <InView threshold={0}>
          {({ inView, ref }) => (
            <p
              ref={ref}
              className={inView ? styles.showGreet : styles.hideGreet}
            >
              Hi, I'm
            </p>
          )}
        </InView>
        <InView threshold={0}>
          {({ inView, ref }) => (
            <h1
              ref={ref}
              className={inView ? styles.showName : styles.hideName}
            >
              Nathanel
            </h1>
          )}
        </InView>
      </article>
      <InView threshold={0}>
        {({ inView, ref }) => (
          <p
            ref={ref}
            className={inView ? styles.showDescription : styles.hideDescription}
          >
            I create highly customized websites for entrepreneurs, businesses,
            and professionals.
          </p>
        )}
      </InView>
      <InView threshold={0}>
        {({ inView, ref }) => (
          <a
            ref={ref}
            className={inView ? styles.showCTA : styles.hideCTA}
            href="#contact"
          >
            <button className={styles.cta}>Contact me</button>
          </a>
        )}
      </InView>
    </section>
  );
}

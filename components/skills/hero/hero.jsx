import { InView } from "react-intersection-observer";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <InView>
        {({ inView, ref }) => (
          <h1 ref={ref} className={inView ? styles.shownH1 : styles.hiddenH1}>
            my skills
          </h1>
        )}
      </InView>
      <InView>
        {({ inView, ref }) => (
          <div
            ref={ref}
            className={`${styles.buttons} ${
              inView ? styles.shownButtons : styles.hiddenButtons
            }`}
          >
            <a href="#design">
              <button>design</button>
            </a>
            <a href="#frontend">
              <button>frontend</button>
            </a>
            <a href="#backend">
              <button>backend</button>
            </a>
            <a href="#deployment">
              <button>deployment</button>
            </a>
          </div>
        )}
      </InView>
    </section>
  );
}

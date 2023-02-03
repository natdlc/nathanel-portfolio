import { InView } from "react-intersection-observer";
import styles from "./tool.module.css";

export default function Tool({ tool }) {
  return (
    <li key={tool.value} className={styles.list_item}>
      <InView>
        {({ inView, ref }) => (
          <p
            ref={ref}
            className={`${styles.list_key} ${
              inView ? styles.shownListKey : styles.hiddenListKey
            }`}
          >
            {tool.key}
          </p>
        )}
      </InView>
      <InView>
        {({ inView, ref }) => (
          <span
            ref={ref}
            className={`${styles.list_line} ${
              inView ? styles.shownListLine : styles.hiddenListLine
            }`}
          ></span>
        )}
      </InView>
      <InView>
        {({ inView, ref }) => (
          <p
            ref={ref}
            className={`${styles.list_value} ${
              inView ? styles.shownListValue : styles.hiddenListValue
            }`}
          >
            {tool.value}
          </p>
        )}
      </InView>
    </li>
  );
}

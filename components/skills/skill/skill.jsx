import { InView } from "react-intersection-observer";
import styles from "./skill.module.css";
import Tool from "./tool/tool";

export default function Skill({ item, setInViewSection }) {
  return (
    <section id={item.title} className={styles.section}>
      <InView>
        {({ inView, ref }) => (
          <h3
            ref={ref}
            className={inView ? styles.shownTitle : styles.hiddenTitle}
          >
            {item.title}
          </h3>
        )}
      </InView>
      <InView>
        {({ inView, ref }) => (
          <p
            ref={ref}
            className={
              inView ? styles.shownDescription : styles.hiddenDescription
            }
          >
            {item.description}
          </p>
        )}
      </InView>
      <ul className={styles.list}>
        {item.tools.map((tool) => (
          <Tool key={tool.key} tool={tool} />
        ))}
      </ul>
    </section>
  );
}

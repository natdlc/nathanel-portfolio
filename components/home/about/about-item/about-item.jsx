import useScrollIntoView from "@/hooks/useScrollIntoView";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { InView } from "react-intersection-observer";
import styles from "./about-item.module.css";

export default function AboutItem({ item }) {
  const toggleView = (inView) => (inView ? styles.shown : styles.hidden);

  const ref = useScrollIntoView(item.id);

  return (
    <article ref={ref} id={item.id} className={styles.article}>
      <InView>
        {({ inView, ref }) => (
          <h3 ref={ref} className={toggleView(inView)}>
            {item.title}
          </h3>
        )}
      </InView>
      <InView>
        {({ inView, ref }) => (
          <p
            ref={ref}
            className={`${styles.description} ${toggleView(inView)}`}
          >
            {item.description}
          </p>
        )}
      </InView>
    </article>
  );
}

import useScrollIntoView from "@/hooks/useScrollIntoView";
import Image from "next/image";
import { InView } from "react-intersection-observer";
import styles from "./work-item.module.css";
import inProgressImg from "@/public/in-progress.png";

export default function WorkItem({ item }) {
  const ref = useScrollIntoView(item.id);
  const toggler = (inView) => (inView ? styles.shown : styles.hidden);

  return (
    <article ref={ref} id={item.id} className={styles.article}>
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
              rel="noreferrer"
            >
              <Image
                src={inProgressImg}
                alt="nathanel.dev's placeholder image for in progress work project"
                className={styles.image}
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

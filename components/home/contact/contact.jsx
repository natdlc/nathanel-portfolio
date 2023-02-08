import useScrollIntoView from "@/hooks/useScrollIntoView";
import { InView } from "react-intersection-observer";
import styles from "./contact.module.css";

export default function Contact() {
  const toggler = (inView) => (inView ? styles.shown : styles.hidden);

  const ref = useScrollIntoView("contact");
  return (
    <section ref={ref} id="contact" className={styles.section}>
      <InView>
        {({ inView, ref }) => (
          <h3 ref={ref} className={toggler(inView)}>
            Let's build your website
          </h3>
        )}
      </InView>
      <InView>
        {({ inView, ref }) => (
          <a
            ref={ref}
            className={toggler(inView)}
            href="mailto:nathanelwebdesign@gmail.com"
          >
            nathanelwebdesign@gmail.com
          </a>
        )}
      </InView>
    </section>
  );
}

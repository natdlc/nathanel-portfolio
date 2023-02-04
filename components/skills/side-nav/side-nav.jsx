import { getSkillItems } from "@/lib/skills";
import styles from "./side-nav.module.css";

const skills = getSkillItems();
skills.unshift({ title: "hero" });

export default function SideNav({ visibleSection }) {
  return (
    <div className={styles.div}>
      {skills.map((skill) => (
        <a
          className={
            visibleSection === skill.title ? styles.visible : styles.hidden
          }
          href={skill.title === "hero" ? "#" : `#${skill.title}`}
        ></a>
      ))}
    </div>
  );
}

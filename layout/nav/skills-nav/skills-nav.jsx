import { getSkillItems } from "@/lib/content/skills";
import { useRouter } from "next/router";
import styles from "./skills-nav.module.css";

const skills = getSkillItems();
skills.unshift({ title: "hero" });

export default function SkillsNav({ visibleSection }) {
  const router = useRouter();

  return (
    <div className={styles.div}>
      {skills.map((skill) => (
        <a
          key={skill.title}
          className={`
          ${router.pathname.includes("skills") ? styles.shown : styles.hidden}`}
          href={skill.title === "hero" ? "#" : `#${skill.title}`}
        >
          <span className={styles.icon_container}>
            <span
              className={
                visibleSection === skill.title
                  ? styles.section_visible
                  : styles.section_hidden
              }
            ></span>
          </span>
        </a>
      ))}
    </div>
  );
}

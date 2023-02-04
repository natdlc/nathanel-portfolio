import { getSkillItems } from "@/lib/skills";
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
          className={`${
            visibleSection === skill.title
              ? styles.visible_section
              : styles.non_visible_section
          }
          ${router.pathname.includes("skills") ? styles.shown : styles.hidden}`}
          href={skill.title === "hero" ? "#" : `#${skill.title}`}
        ></a>
      ))}
    </div>
  );
}

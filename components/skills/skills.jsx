import styles from "./skills.module.css";

import { getSkillItems } from "@/lib/skills";

const skillItems = getSkillItems();

export default function SkillsPage() {
  return (
    <>
      <section className={styles.hero}>
        <h1>my skills</h1>
        <div className={styles.buttons}>
          <a href="#design">
            <button>design</button>
          </a>
          <a href="#front-end">
            <button>front-end</button>
          </a>
          <a href="#back-end">
            <button>back-end</button>
          </a>
          <a href="#deployment">
            <button>deployment</button>
          </a>
        </div>
      </section>

      {skillItems.map((item) => (
        <section key={item.title} id={item.title} className={styles.section}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <ul className={styles.list}>
            {item.tools.map((tool) => (
              <li key={tool.value} className={styles.list_item}>
                <p className={styles.list_key}>{tool.key}</p>
                <span className={styles.list_line}></span>
                <p className={styles.list_value}>{tool.value}</p>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </>
  );
}

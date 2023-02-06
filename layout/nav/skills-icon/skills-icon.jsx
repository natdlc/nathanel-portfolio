import Link from "next/link";
import styles from "./skills-icon.module.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function SkillsIcon() {
  const [isInitialAnimationComplete, setIsInitialAnimationComplete] =
    useState(false);

  const router = useRouter();
  const onSkillsPage = router.pathname === "/skills";

  const delay = (ms) =>
    setTimeout(() => setIsInitialAnimationComplete(true), ms);

  useEffect(() => {
    delay(100);
  }, []);

  return (
    <aside className={styles.aside}>
      <Link className={styles.link} href={onSkillsPage ? "/" : "skills"}>
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${styles.svg} ${onSkillsPage && styles.on_skills_page} ${
            !isInitialAnimationComplete && styles.initial_load_animation
          }`}
        >
          <line x1="22" y1="38.5" x2="79" y2="38.5" stroke="black" />
          <line x1="22" y1="51.5" x2="69" y2="51.5" stroke="black" />
          <line x1="22.5" y1="51" x2="22.5" y2="65" stroke="black" />
          <line x1="35" y1="64.5" x2="78" y2="64.5" stroke="black" />
          <line x1="78.5" y1="14" x2="78.5" y2="65" stroke="black" />
          <line x1="22" y1="77.5" x2="92" y2="77.5" stroke="black" />
          <line x1="91.5" y1="25" x2="91.5" y2="78" stroke="black" />
          <line x1="8" y1="26.5" x2="69" y2="26.5" stroke="black" />
          <line x1="8.5" y1="26" x2="8.5" y2="89" stroke="black" />
        </svg>
      </Link>
    </aside>
  );
}

import Link from "next/link";
import Image from "next/image";
import styles from "./skills-icon.module.css";
import skillsIcon from "@/public/skills-icon.svg";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function SkillsIcon() {
  const [initialAnimationComplete, setInitialAnimationComplete] =
    useState(false);

  const router = useRouter();
  const onSkillsPage = router.pathname === "/skills";

  const delay = (ms) => setTimeout(() => setInitialAnimationComplete(true), ms);

  useEffect(() => {
    delay(2000);
  }, []);

  let imageClassName;

  if (!initialAnimationComplete) {
    imageClassName = styles.initial_animation;
  } else {
    imageClassName = styles.default;
  }

  return (
    <aside className={styles.aside}>
      <Link className={styles.link} href={onSkillsPage ? "/" : "skills"}>
        {/* <Image
          className={`${imageClassName} ${
            onSkillsPage && styles.on_skills_page
          }`}
          src={skillsIcon}
          width={50}
          alt="skills button icon"
        /> */}

        {/* SVG TEST BELOW */}
        <Image
          className={`${imageClassName} ${
            onSkillsPage && styles.on_skills_page
          }`}
          src={skillsIcon}
          width={50}
          alt="skills button icon"
        />

      </Link>
    </aside>
  );
}

import Link from "next/link";
import Image from "next/image";
import styles from "./skills-icon.module.css";
import skillsIcon from "@/public/skills-icon.svg";
import { useRouter } from "next/router";

export default function SkillsIcon() {
  const router = useRouter();
  const isSkillsPage = router.pathname === "/skills";
  return (
    <aside className={styles.aside}>
      <Link className={styles.link} href={isSkillsPage ? "/" : "skills"}>
        <Image
          className={isSkillsPage ? styles.rotated : styles.image}
          src={skillsIcon}
          width={50}
          alt="skills button icon"
        />
      </Link>
    </aside>
  );
}

import Link from "next/link";
import Image from "next/image";
import styles from "./skills.module.css";
import skillsIcon from "@/public/skills-icon.svg";

export default function Skills() {
  return (
    <aside className={styles.aside}>
      <Link className={styles.link} href="skills">
        <Image src={skillsIcon} width={50} />
      </Link>
    </aside>
  );
}

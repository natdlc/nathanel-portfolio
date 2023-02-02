import styles from "./header.module.css";
import Anchor from "@/components/common/anchor/anchor";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <p className={styles.logo}>nathanel.dev</p>
      <nav>
        <ul className={styles.ul}>
          <li>
            <Anchor href="#">Home</Anchor>
          </li>
          <li>
            <Anchor href="#about">About</Anchor>
          </li>
          <li>
            <Anchor href="#work">Work</Anchor>
          </li>
          <li>
            <Link href="blog" className={styles.blog}>
              Blog
            </Link>
          </li>
          <li>
            <Anchor href="#contact">Contact</Anchor>
          </li>
        </ul>
      </nav>
    </header>
  );
}

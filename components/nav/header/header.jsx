import styles from "./header.module.css";
import Anchor from "@/components/common/anchor/anchor";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  const isNotHome = router.pathname !== "/";

  return (
    <header className={styles.header}>
      <p className={styles.logo}>nathanel.dev</p>
      <nav>
        <ul className={styles.ul}>
          <li>
            <Anchor href={isNotHome ? "/" : "#"}>Home</Anchor>
          </li>
          <li>
            <Anchor href={isNotHome ? "/#about" : "#about"}>About</Anchor>
          </li>
          <li>
            <Anchor href={isNotHome ? "/#work" : "#work"}>Work</Anchor>
          </li>
          <li>
            <Link href="blog" className={styles.blog}>
              Blog
            </Link>
          </li>
          <li>
            <Anchor href={isNotHome ? "/#contact" : "#contact"}>Contact</Anchor>
          </li>
        </ul>
      </nav>
    </header>
  );
}

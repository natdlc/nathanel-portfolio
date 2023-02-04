import styles from "./header.module.css";
import Anchor from "@/components/common/anchor/anchor";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import AboutSubmenu from "./about-submenu/about-submenu";

export default function Header() {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState();

  const isNotHome = router.pathname !== "/";

  return (
    <header className={styles.header}>
      <p className={styles.logo}>nathanel.dev</p>
      <nav>
        <ul className={styles.ul}>
          <li>
            <Anchor href={isNotHome ? "/" : "#"}>Home</Anchor>
          </li>
          <li
            onPointerEnter={() => setIsHovered(true)}
            onPointerLeave={() => setIsHovered(false)}
            className={styles.about}
          >
            <Anchor href={isNotHome ? "/#about" : "#about"}>About</Anchor>
            {isHovered ? <AboutSubmenu /> : null}
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

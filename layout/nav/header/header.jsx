import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./header.module.css";
import Anchor from "@/components/common/anchor/anchor";
import Submenu from "@/components/common/submenu/submenu";
import useSubmenu from "@/hooks/useSubmenu";
import { getAboutArticles } from "@/lib/about";
import { getWorkItems } from "@/lib/work";

export default function Header() {
  const router = useRouter();
  const isNotHome = router.pathname !== "/";

  const aboutSubmenu = useSubmenu({
    path: "about",
    title: "About",
    items: getAboutArticles(),
  });

  const workSubmenu = useSubmenu({
    path: "work",
    title: "Work",
    items: getWorkItems(),
  });

  return (
    <header className={styles.header}>
      <p className={styles.logo}>nathanel.dev</p>
      <nav>
        <ul className={styles.ul}>
          <li>
            {/* <Anchor href={isNotHome ? "/" : "#"}>Home</Anchor> */}
            <Link href="/" className={styles.link}>
              Home
            </Link>
          </li>
          <Submenu submenu={aboutSubmenu} />
          <Submenu submenu={workSubmenu} />
          <li>
            <Link href="blog" className={styles.link}>
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

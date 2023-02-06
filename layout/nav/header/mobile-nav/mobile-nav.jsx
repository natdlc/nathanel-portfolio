import Anchor from "@/components/common/anchor/anchor";
import Submenu from "@/components/common/submenu/submenu";
import useSubmenu from "@/hooks/useSubmenu";
import { getAboutArticles } from "@/lib/about";
import { getWorkItems } from "@/lib/work";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "./mobile-nav.module.css";

export default function MobileNav() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

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
    <nav className={styles.nav}>
      <button
        onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
        className={`${styles.mobile_menu} ${
          isMobileNavOpen ? styles.open : ""
        }`}
      ></button>
      {isMobileNavOpen ? (
        <ul className={styles.ul}>
          <li>
            <Link scroll={false} href="/" className={styles.link}>
              Home
            </Link>
          </li>

          <Submenu submenu={aboutSubmenu} isMobile />
          <Submenu submenu={workSubmenu} isMobile />

          <li>
            <Link href="blog" className={styles.link}>
              Blog
            </Link>
          </li>
          <li>
            <Anchor href={isNotHome ? "/#contact" : "#contact"}>Contact</Anchor>
          </li>
        </ul>
      ) : null}
    </nav>
  );
}

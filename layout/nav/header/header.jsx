import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./header.module.css";
import Anchor from "@/components/common/anchor/anchor";
import Submenu from "@/components/common/submenu/submenu";
import useSubmenu from "@/hooks/useSubmenu";
import { getAboutArticles } from "@/lib/about";
import { getWorkItems } from "@/lib/work";
import MobileNav from "./mobile-nav/mobile-nav";
import { getMainMenu } from "@/lib/nav";
import CustomLink from "@/components/common/custom-link/custom-link";

const mainMenu = getMainMenu();

export default function Header() {
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
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          {mainMenu.map((link) => (
            <li key={link.pathname + link.hash}>
              <CustomLink link={link} />
              {link.hasSubmenu ? <Submenu submenu={aboutSubmenu} /> : null}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

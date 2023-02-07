import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./header.module.css";
import Anchor from "@/components/common/anchor/anchor";
import Submenu from "@/components/common/submenu/submenu";
import { getAboutArticles } from "@/lib/content/about";
import { getWorkItems } from "@/lib/content/work";
import MobileNav from "./mobile-nav/mobile-nav";
import { getMainMenu } from "@/lib/content/nav";
import CustomLink from "@/components/common/custom-link/custom-link";
import useSubmenu from "@/hooks/useSubmenu";

const mainMenu = getMainMenu();

export default function Header() {
  return (
    <header className={styles.header}>
      <p className={styles.logo}>nathanel.dev</p>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          {mainMenu.map((link) => (
            <li key={link.pathname + link.hash}>
              <CustomLink link={link} />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

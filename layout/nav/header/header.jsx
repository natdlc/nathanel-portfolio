import styles from "./header.module.css";
import MobileNav from "./mobile-nav/mobile-nav";
import { getMainMenu } from "@/lib/content/nav";
import CustomLink from "@/components/common/custom-link/custom-link";

const mainMenu = getMainMenu();

export default function Header() {
  return (
    <header className={styles.header}>
      <p className={styles.logo}>nathanel.dev</p>
      <MobileNav />
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

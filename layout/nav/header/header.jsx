import styles from "./header.module.css";
import MobileNav from "./mobile-nav/mobile-nav";
import MainMenu from "./main-menu/main-menu";

export default function Header() {
  return (
    <header className={styles.header}>
      <p className={styles.logo}>nathanel.dev</p>
      <MobileNav />
      <MainMenu />
    </header>
  );
}

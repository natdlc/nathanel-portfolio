import { useState } from "react";
import MainMenu from "../main-menu/main-menu";
import styles from "./mobile-nav.module.css";

export default function MobileNav() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <button
        onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
        className={`${styles.mobile_menu} ${
          isMobileNavOpen ? styles.open : ""
        }`}
      ></button>
      <div className={`${styles.div} ${isMobileNavOpen ? styles.open : ""}`}>
        <MainMenu isMobile />
      </div>
    </nav>
  );
}

import { useRouter } from "next/router";
import { useState } from "react";
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
      {isMobileNavOpen ? <ul className={styles.ul}></ul> : null}
    </nav>
  );
}

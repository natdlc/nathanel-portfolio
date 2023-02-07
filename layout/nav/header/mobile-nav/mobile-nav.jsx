import CustomLink from "@/components/common/custom-link/custom-link";
import MobileNavContext from "@/context/mobile-nav-context";
import { useContext } from "react";
import Socials from "../../socials/socials";
import MainMenu from "../main-menu/main-menu";
import styles from "./mobile-nav.module.css";

export default function MobileNav() {
  const { isMobileNavOpen, setIsMobileNavOpen } = useContext(MobileNavContext);

  return (
    <nav className={styles.nav}>
      <button
        onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
        className={`${styles.mobile_menu_btn} ${
          isMobileNavOpen ? styles.open : ""
        }`}
      />
      <div
        className={`${styles.nav_content_container} ${
          isMobileNavOpen ? styles.open : ""
        }`}
      >
        <MainMenu isMobile />
        <div
          style={{
            marginTop: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <CustomLink
            isMobile
            link={{
              pathname: "/skills",
              title: "Skills",
              hash: "#",
              hasSubmenu: false,
            }}
          />
          <Socials />
        </div>
      </div>
    </nav>
  );
}

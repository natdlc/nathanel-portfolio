import { useRouter } from "next/router";
import Anchor from "../anchor/anchor";
import SubmenuChildren from "./submenu-children";
import styles from "./submenu.module.css";

export default function Submenu({ submenu, isMobile }) {
  const router = useRouter();

  return (
    <li
      onPointerEnter={() => (isMobile ? null : submenu.onPointerHandler(true))}
      onPointerLeave={() => (isMobile ? null : submenu.onPointerHandler(false))}
      className={`${styles.submenu_parent} ${isMobile ? styles.mobile : ""}`}
    >
      {/* <button
        aria-label="Collapse"
        aria-details="Button that collapses or uncollapses the sub-menu"
        className={`${styles.collapse_button} ${
          !isMobile ? styles.hidden : ""
        }`}
        onClick={() =>
          isMobile ? submenu.onCollapseHandler(!submenu.isCollapsed) : null
        }
      ></button> */}

      {/* {submenu.isHovered ? <SubmenuChildren items={submenu.items} /> : null}
      {!isMobile || submenu.isCollapsed ? null : (
        <SubmenuChildren items={submenu.items} isMobile={isMobile} />
      )} */}

      {<SubmenuChildren items={submenu.items} />}
    </li>
  );
}

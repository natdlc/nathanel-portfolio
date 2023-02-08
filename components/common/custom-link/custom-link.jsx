import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import Submenu from "../submenu/submenu";
import styles from "./custom-link.module.css";
import collapseBtn from "@/public/collapse-btn.svg";
import Image from "next/image";
import MobileNavContext from "@/context/mobile-nav-context";

export default function CustomLink({ link, isMobile, style }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const { setIsMobileNavOpen } = useContext(MobileNavContext);

  const { pathname, title, hash, hasSubmenu } = link;

  const submenu = (
    <AnimatePresence>
      {(isHovered && hasSubmenu) || (!isCollapsed && hasSubmenu) ? (
        <Submenu isMobile={isMobile} key={pathname + hash} urlTitle={title} />
      ) : null}
    </AnimatePresence>
  );

  return (
    <div
      onPointerEnter={() => (isMobile ? null : setIsHovered(true))}
      onPointerLeave={() => (isMobile ? null : setIsHovered(false))}
      className={styles.custom_link_container}
    >
      <Link
        style={{ ...style }}
        onClick={() => setIsMobileNavOpen(false)}
        className={styles.custom_link}
        // scroll={!hash}
        href={{ pathname, hash }}
      >
        {title}
      </Link>
      {isMobile && hasSubmenu ? (
        <button
          aria-label="collapse-button"
          aria-roledescription="button that shows or hides the submenu"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={`${styles.mobile_submenu_button} ${
            !isCollapsed ? styles.uncollapsed : ""
          }`}
        >
          <Image src={collapseBtn} width={15} />
        </button>
      ) : null}
      {submenu}
    </div>
  );
}

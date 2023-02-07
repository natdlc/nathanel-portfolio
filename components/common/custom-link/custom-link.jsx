import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Submenu from "../submenu/submenu";
import styles from "./custom-link.module.css";

export default function CustomLink({ link, isMobile }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);

  const { pathname, title, hash, hasSubmenu } = link;
  const router = useRouter();

  const submenu = (
    <AnimatePresence>
      {(isHovered && hasSubmenu) || (!isCollapsed && hasSubmenu) ? (
        <Submenu isMobile key={pathname + hash} urlTitle={title} />
      ) : null}
    </AnimatePresence>
  );

  console.log(isCollapsed);

  return (
    <div
      onPointerEnter={() => (isMobile ? null : setIsHovered(true))}
      onPointerLeave={() => (isMobile ? null : setIsHovered(false))}
      className={styles.custom_link_container}
    >
      {router.pathname === pathname ? (
        <>
          <a className={styles.custom_link} href={hash}>
            {title}
          </a>
          {isMobile && hasSubmenu ? (
            <button
              aria-label="collapse-button"
              aria-roledescription="button that shows or hides the submenu"
              onClick={() => setIsCollapsed(!isCollapsed)}
              className={styles.mobile_submenu_button}
            ></button>
          ) : null}
          {submenu}
        </>
      ) : (
        <>
          <Link
            className={styles.custom_link}
            scroll={false}
            href={{ pathname, hash }}
          >
            {title}
          </Link>
          {submenu}
        </>
      )}
    </div>
  );
}

import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Submenu from "../submenu/submenu";
import styles from "./custom-link.module.css";

export default function CustomLink({ link }) {
  const [isHovered, setIsHovered] = useState();
  const { pathname, title, hash } = link;
  const router = useRouter();

  const submenu = (
    <AnimatePresence>
      {isHovered && link.hasSubmenu ? (
        <Submenu key={link.pathname + link.hash} urlTitle={link.title} />
      ) : null}
    </AnimatePresence>
  );

  return (
    <div
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
      className={styles.custom_link_container}
    >
      {router.pathname === pathname ? (
        <>
          <a className={styles.custom_link} href={hash}>
            {title}
          </a>
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

import Link from "next/link";
import styles from "./submenu.module.css";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useContext } from "react";
import MobileNavContext from "@/context/mobile-nav-context";

export default function SubmenuChildren({ items, isMobile }) {
  const router = useRouter();
  const { setIsMobileNavOpen } = useContext(MobileNavContext);

  const onClickHandler = () => setIsMobileNavOpen(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <menu className={`${styles.menu} ${isMobile ? styles.mobile : ""}`}>
        {items.map(({ pathname, title, hash }) => (
          <li key={pathname + hash}>
            {router.pathname === pathname ? (
              <a onClick={onClickHandler} href={hash}>
                {title}
              </a>
            ) : (
              <Link
                onClick={onClickHandler}
                scroll={false}
                href={{ pathname, hash }}
              >
                {title}
              </Link>
            )}
          </li>
        ))}
      </menu>
    </motion.div>
  );
}

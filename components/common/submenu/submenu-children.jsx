import Link from "next/link";
import styles from "./submenu.module.css";
import { useRouter } from "next/router";
import { useContext } from "react";
import MobileNavContext from "@/context/mobile-nav-context";

export default function SubmenuChildren({ items, isMobile }) {
  const router = useRouter();
  const { setIsMobileNavOpen } = useContext(MobileNavContext);

  const onClickHandler = () => setIsMobileNavOpen(false);

  return (
    <menu className={`${styles.menu} ${isMobile ? styles.mobile : ""}`}>
      {items.map(({ pathname, title, hash }) => (
        <li key={pathname + hash}>
          <Link
            onClick={onClickHandler}
            scroll={router.pathname === pathname}
            href={{ pathname, hash }}
          >
            {title}
          </Link>
        </li>
      ))}
    </menu>
  );
}

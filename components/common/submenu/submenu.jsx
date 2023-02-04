import { useRouter } from "next/router";
import Anchor from "../anchor/anchor";
import SubmenuChildren from "./submenu-children";
import styles from "./submenu.module.css";

export default function Submenu({ submenu }) {
  const router = useRouter();
  const isNotHome = router.pathname !== "/";
  return (
    <li
      onPointerEnter={() => submenu.onPointerHandler(true)}
      onPointerLeave={() => submenu.onPointerHandler(false)}
      className={styles.submenu_parent}
    >
      <Anchor href={isNotHome ? `/#${submenu.path}` : `#${submenu.path}`}>
        {submenu.title}
      </Anchor>
      {submenu.isHovered ? <SubmenuChildren items={submenu.items} /> : null}
    </li>
  );
}

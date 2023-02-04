import { useRouter } from "next/router";
import styles from "./submenu.module.css";

export default function SubmenuChildren({ items }) {
  const router = useRouter();
  const isNotHome = router.pathname !== "/";

  return (
    <menu className={styles.menu}>
      {items.map((item) => (
        <li key={item.id}>
          <a href={isNotHome ? `/#${item.id}` : `#${item.id}`}>{item.title}</a>
        </li>
      ))}
    </menu>
  );
}

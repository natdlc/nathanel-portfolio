import Link from "next/link";
import styles from "./submenu.module.css";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

export default function SubmenuChildren({ items }) {
  const router = useRouter();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <menu className={`${styles.menu}`}>
        {items.map(({ pathname, title, hash }) => (
          <li key={pathname + hash}>
            {router.pathname === pathname ? (
              <a href={hash}>{title}</a>
            ) : (
              <Link scroll={false} href={{ pathname, hash }}>
                {title}
              </Link>
            )}
          </li>
        ))}
      </menu>
    </motion.div>
  );
}

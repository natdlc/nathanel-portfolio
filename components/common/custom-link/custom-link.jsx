import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./custom-link.module.css";

export default function CustomLink({ link }) {
  const { pathname, title, hash } = link;
  const router = useRouter();

  if (router.pathname === pathname) {
    return (
      <a className={styles.custom_link} href={hash}>
        {title}
      </a>
    );
  }

  return (
    <Link
      className={styles.custom_link}
      scroll={false}
      href={{ pathname, hash }}
    >
      {title}
    </Link>
  );
}

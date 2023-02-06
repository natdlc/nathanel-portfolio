import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./custom-link.module.css";

export default function CustomLink({ link }) {
  const { pathname: currentPath } = useRouter();

  const { path, title, fragmentId } = link;

  const homeScrollToTop = link.id === "home" && currentPath === "/";

  const shouldScrollToTop =
    `/${link.id}` === currentPath && link.path === currentPath;

  let href;

  if (shouldScrollToTop || homeScrollToTop) {
    return (
      <a className={styles.custom_link} href="#">
        {title}
      </a>
    );
  }

  if (fragmentId && currentPath !== path) {
    href = `${link.path}#${fragmentId}`;
    return (
      <Link className={styles.custom_link} scroll={false} href={href}>
        {title}
      </Link>
    );
  }

  if (fragmentId && currentPath === path) {
    href = `#${fragmentId}`;
    return (
      <a className={styles.custom_link} href={href}>
        {title}
      </a>
    );
  }

  if (!fragmentId) {
    href = path;
  }

  return (
    <Link className={styles.custom_link} scroll={false} href={href}>
      {title}
    </Link>
  );
}

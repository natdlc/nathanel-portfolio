import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./custom-link.module.css";

export default function CustomLink({ link }) {
  const { pathname: currentPath } = useRouter();

  const { path, title, fragmentId } = link;

  const homeScrollToTop = link.id === "home" && currentPath === "/";

  const shouldScrollToTop =
    (`/${link.id}` === currentPath && link.path === currentPath) ||
    homeScrollToTop;

  let href;

  // test
  let linkComponent;

  if (shouldScrollToTop) {
    // test
    console.log("\n");
    console.log("shouldScrollToTop || homeScrollToTop");
    console.log(link.id === "home");
    linkComponent = (
      <a className={styles.custom_link} href="#">
        {title}
      </a>
    );

    // return (
    //   <a className={styles.custom_link} href="#">
    //     {title}
    //   </a>
    // );
  }

  if (fragmentId && currentPath !== path) {
    href = `${link.path}#${fragmentId}`;
    console.log("\n");
    console.log("fragmentId && currentPath !== path");
    console.log(link.id === "home");
    // test
    linkComponent = (
      <Link className={styles.custom_link} scroll={false} href={href}>
        {title}
      </Link>
    );

    // return (
    //   <Link className={styles.custom_link} scroll={false} href={href}>
    //     {title}
    //   </Link>
    // );
  }

  if (fragmentId && currentPath === path) {
    href = `#${fragmentId}`;
    console.log("\n");
    console.log("fragmentId && currentPath === path");
    console.log(link.id === "home");
    // test
    linkComponent = (
      <a className={styles.custom_link} href={href}>
        {title}
      </a>
    );

    // return (
    //   <a className={styles.custom_link} href={href}>
    //     {title}
    //   </a>
    // );
  }

  if (!fragmentId) {
    href = path;
    console.log("\n");
    console.log("!fragmentId");
    console.log(link.id === "home");
    // test
    linkComponent = (
      <Link className={styles.custom_link} scroll={false} href={href}>
        {title}
      </Link>
    );
  }

  // test
  return <li>{linkComponent}</li>;

  // return (
  //   <Link className={styles.custom_link} scroll={false} href={href}>
  //     {title}
  //   </Link>
  // );
}

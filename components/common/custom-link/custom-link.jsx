import Link from "next/link";
import { useRouter } from "next/router";

export default function CustomLink({ link }) {
  const { pathname: currentPath } = useRouter();

  const { path, title, fragmentId } = link;

  const homeScrollToTop = link.id === "home" && currentPath === "/";

  const shouldScrollToTop =
    `/${link.id}` === currentPath && link.path === currentPath;

  let href;

  if (shouldScrollToTop || homeScrollToTop) {
    return <a href="#">{title}</a>;
  }

  if (fragmentId && currentPath !== path) {
    href = `/#${fragmentId}`;
    return (
      <Link scroll={false} href={href}>
        {title}
      </Link>
    );
  }

  if (fragmentId && currentPath === path) {
    href = `#${fragmentId}`;
    return <a href={href}>{title}</a>;
  }

  if (!fragmentId) {
    href = path;
  }

  return (
    <Link scroll={false} href={href}>
      {title}
    </Link>
  );
}

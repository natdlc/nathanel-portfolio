import { getAboutArticles } from "@/lib/about";
import styles from "./about-submenu.module.css";

const articles = getAboutArticles();

export default function AboutSubmenu() {
  return (
    <menu className={styles.menu}>
      {articles.map((article) => (
        <li key={article.id}>
          <a href={`#${article.id}`}>{article.title}</a>
        </li>
      ))}
    </menu>
  );
}

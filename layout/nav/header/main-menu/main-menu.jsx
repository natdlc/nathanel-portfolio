import CustomLink from "@/components/common/custom-link/custom-link";
import { getMainMenu } from "@/lib/content/nav";
import styles from "./main-menu.module.css";

const mainMenu = getMainMenu();

export default function MainMenu({ isMobile }) {
  return (
    <nav className={isMobile ? styles.mobile : styles.nav}>
      <ul className={styles.ul}>
        {mainMenu.map((link) => (
          <li key={link.pathname + link.hash}>
            <CustomLink isMobile={isMobile} link={link} />
          </li>
        ))}
      </ul>
    </nav>
  );
}

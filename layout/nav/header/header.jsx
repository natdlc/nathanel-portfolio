import styles from "./header.module.css";
import MobileNav from "./mobile-nav/mobile-nav";
import MainMenu from "./main-menu/main-menu";
import Image from "next/image";
import logo from "@/public/logo.svg";

export default function Header() {
  return (
    <header className={styles.header}>
      <Image
        className={styles.logo}
        src={logo}
        alt="nathanel corpuz logo"
        width={60}
      />
      {/* <p className={styles.logo}>nathanel.dev</p> */}
      <MobileNav />
      <MainMenu />
    </header>
  );
}

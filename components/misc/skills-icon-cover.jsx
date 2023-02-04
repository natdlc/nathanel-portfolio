import styles from "@/styles/util.module.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function SkillsIconCover() {
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  const router = useRouter();

  useEffect(() => {
    if (router.pathname.includes("skills")) {
      setIsInitialLoad(false);
    }
  }, [router.pathname]);

  return (
    <div
      className={`${styles.skills_icon_cover} ${
        isInitialLoad ? "" : styles.hidden
      }`}
    ></div>
  );
}

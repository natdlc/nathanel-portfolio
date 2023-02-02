import Image from "next/image";
import twitterIcon from "@/public/socials-icon/twitter.png";
import linkedinIcon from "@/public/socials-icon/linkedin.png";

import styles from "./socials.module.css";
import Anchor from "@/components/common/anchor/anchor";

export default function Socials() {
  return (
    <aside className={styles.aside}>
      <Anchor href="https://twitter.com/nathanelcorpuz" target="_blank">
        <Image src={twitterIcon} width={20} />
      </Anchor>
      <Anchor href="https://linkedin.com/in/nathanelcorpuz/" target="_blank">
        <Image src={linkedinIcon} width={20} />
      </Anchor>
    </aside>
  );
}

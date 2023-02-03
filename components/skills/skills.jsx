import styles from "./skills.module.css";

import { getSkillItems } from "@/lib/skills";
import SideNav from "./side-nav/side-nav";
import Hero from "./hero/hero";
import Skill from "./skill/skill";
import { useState } from "react";

const skillItems = getSkillItems();

export default function SkillsPage() {
  const [inViewSection, setInViewSection] = useState("");
  return (
    <>
      <SideNav />
      <Hero />

      {skillItems.map((item) => (
        <Skill
          key={item.title}
          item={item}
          setInViewSection={setInViewSection}
        />
      ))}
    </>
  );
}

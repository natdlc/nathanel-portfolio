import { getSkillItems } from "@/lib/content/skills";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Hero from "./hero/hero";
import Skill from "./skill/skill";

const skillItems = getSkillItems();

export default function SkillsPage({ dispatch }) {
  return (
    <>
      <Hero dispatch={dispatch} />

      {skillItems.map((item) => (
        <Skill key={item.title} item={item} dispatch={dispatch} />
      ))}
    </>
  );
}

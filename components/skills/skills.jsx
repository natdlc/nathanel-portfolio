import styles from "./skills.module.css";
import { getSkillItems } from "@/lib/skills";
import SideNav from "./side-nav/side-nav";
import Hero from "./hero/hero";
import Skill from "./skill/skill";
import { useReducer } from "react";

const skillItems = getSkillItems();

const initialState = { visibleSection: "hero" };

const reducer = (state, action) => {
  if (action.type === "set_visible_section") {
    return {
      visibleSection: action.section,
    };
  }
  throw Error("Unknown action");
};

export default function SkillsPage() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <SideNav visibleSection={state.visibleSection} />
      <Hero dispatch={dispatch} />

      {skillItems.map((item) => (
        <Skill key={item.title} item={item} dispatch={dispatch} />
      ))}
    </>
  );
}

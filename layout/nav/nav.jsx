import useSkillsNav from "@/hooks/useSkillsNav";
import Header from "./header/header";
import SkillsIcon from "./skills-icon/skills-icon";
import SkillsNav from "./skills-nav/skills-nav";
import Socials from "./socials/socials";

export default function FixedNav({ skillsNav }) {
  return (
    <>
      <Header />
      <SkillsNav visibleSection={skillsNav.state.visibleSection} />
      <Socials />
      <SkillsIcon />
    </>
  );
}

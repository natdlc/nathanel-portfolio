import SkillsPage from "@/components/skills/skills";
import Head from "next/head";

export default function Skills() {
  return (
    <>
      <Head>
        <title>My Skills - Nathanel - Web Developer Portfolio</title>
        <meta
          name="description"
          content="Web developer skills of Nathanel - Creating better branding for businesses and professionals through websites"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SkillsPage />
    </>
  );
}

import Head from "next/head";
import Header from "@/components/nav/header/header";
import Socials from "@/components/nav/socials/socials";
import Skills from "@/components/nav/skills/skills";
import Hero from "@/components/sections/hero/hero";
import About from "@/components/sections/about/about";
import Work from "@/components/sections/work/work";
import Contact from "@/components/sections/contact/contact";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Web design portfolio - Nathanel</title>
        <meta
          name="description"
          content="Web design portfolio of Nathanel - Creating better branding for businesses and professionals through websites"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* fixed */}
      <Header />
      <Socials />
      <Skills />

      <main>
        <Hero />
        <About />
        <Work />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

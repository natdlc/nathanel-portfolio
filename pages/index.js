import Head from "next/head";
import Header from "@/components/nav/header/header";
import Socials from "@/components/nav/socials/socials";
import Skills from "@/components/nav/skills/skills";
import Hero from "@/components/sections/hero/hero";
import About from "@/components/sections/about/about";
import Work from "@/components/sections/work/work";

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
        {/* hero */}
        <Hero />

        {/* about */}
        <About />

        {/* work */}
        <Work />

        {/* contact */}
        <section id="contact">
          <h2>let's chat</h2>
          <p>nathanelwebdesign@gmail.com</p>
        </section>
      </main>

      <footer>
        <p>
          <small>nathanel.dev &copy; 2023</small>
        </p>
      </footer>
    </>
  );
}

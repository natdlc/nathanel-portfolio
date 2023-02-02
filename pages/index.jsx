import About from "@/components/home/about/about";
import Contact from "@/components/home/contact/contact";
import Hero from "@/components/home/hero/hero";
import Work from "@/components/home/work/work";
import Head from "next/head";

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
      <Hero />
      <About />
      <Work />
      <Contact />
    </>
  );
}

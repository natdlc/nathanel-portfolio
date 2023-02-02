import Head from "next/head";
import Header from "@/components/nav/header/header";
import Socials from "@/components/nav/socials/socials";
import Skills from "@/components/nav/skills/skills";
import Hero from "@/components/sections/hero/hero";
import About from "@/components/sections/about/about";

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
        <section id="work">
          {/* sheenafaye.com */}
          <article>
            <div>
              <h2>sheenafaye.com</h2>
              <h4>in progress</h4>
            </div>
            <figure>
              <img src="https://via.placeholder.com/1920x1080" width={500} />
              <figcaption>
                A website for my partner who needed to reach high paying clients
                through an elegant portfolio that showcases her profession and
                personality
              </figcaption>
            </figure>
          </article>

          {/* labloco.com */}
          <article>
            <div>
              <h2>labloco.com</h2>
              <h4>in progress</h4>
            </div>
            <figure>
              <img src="https://via.placeholder.com/1920x1080" width={500} />
              <figcaption>
                An e-commerce website owned by passionate medical entrepreneurs
                who needed to increase engagement, visibility, and revenue
                through intuitive user experience
              </figcaption>
            </figure>
          </article>
        </section>

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

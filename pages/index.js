import Head from "next/head";
import Header from "@/components/nav/header/header";
import Socials from "@/components/nav/socials/socials";
import Skills from "@/components/nav/skills/skills";

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
        <section>
          <p>Hi, I'm</p>
          <h1>Nathanel</h1>
          <p>
            I design and develop websites for entrepreneurs, businesses, and
            professionals
          </p>
          <button>Contact me</button>
        </section>

        {/* about */}
        <section id="about">
          {/* who i am */}
          <div>
            <h3>Who I am</h3>
            <p>
              I have been designing and developing websites since 2021. I am 27
              years old, based in the Philippines, and my Myers-Briggs
              personality type is INFJ-T.
            </p>
          </div>

          {/* what i do */}
          <div>
            <h3>What I do</h3>
            <p>
              I help business owners and professionals create better branding,
              solidify credibility, and increase traffic and revenue by creating
              well-designed and functional websites with practically structured
              code.
            </p>
          </div>

          {/* How I do it */}
          <div>
            <h3>How I do it</h3>
            <p>
              We'll talk, plan, repeat until we're both clear on every process,
              then I'll start coding the website. We'll stay in touch for
              feedback, then we'll talk again about before we publish the
              website.
            </p>
          </div>

          {/* Life outside code */}
          <div>
            <h3>Life outside code</h3>
            <p>
              I have 8 cats and 1 dog. I take care of them everyday. I love
              listening to many kinds of music like hip-hop, rap, dubstep,
              classical, alternative rock, grunge, pop punk, screamo. I play PC
              and PS games. I enjoy coffee in the morning. I listen to podcasts
              while doing house chores. I like to talk about theories, humanity,
              and the universe.
            </p>
          </div>
        </section>

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

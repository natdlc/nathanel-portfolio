import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import twitterIcon from "@/public/socials-icon/twitter.png";
import linkedinIcon from "@/public/socials-icon/linkedin.png";
import skillsIcon from "@/public/skills-icon.svg";

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
      {/* fixed section start*/}
      <header>
        <p>nathanel.dev</p>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#work">Work</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      <aside>
        <a href="https://twitter.com/nathanelcorpuz" target="_blank">
          <Image src={twitterIcon} width={30} />
        </a>
        <a href="https://linkedin.com/in/nathanelcorpuz/" target="_blank">
          <Image src={linkedinIcon} width={30} />
        </a>
      </aside>
      <aside>
        <Link href="skills">
          <Image src={skillsIcon} width={50} />
        </Link>
      </aside>

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
        <section>
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

        {/* projects */}
        <section>
          {/* sheenafaye.com */}
          <article>
            <div>
              <h2>sheenafaye.com</h2>
              <p>in progress</p>
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
              <p>in progress</p>
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
        <section>
          <h3>let's chat</h3>
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

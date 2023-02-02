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
      </main>
    </>
  );
}

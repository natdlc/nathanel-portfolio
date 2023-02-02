import About from "./about/about";
import Contact from "./contact/contact";
import Hero from "./hero/hero";
import Work from "./work/work";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Work />
      <Contact />
    </>
  );
}

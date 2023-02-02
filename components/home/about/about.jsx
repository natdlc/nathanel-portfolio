import AboutItem from "./about-item/about-item";
import { getAboutArticles } from "@/lib/about";
import { useRef } from "react";

const articles = getAboutArticles();

export default function About() {
  const ref = useRef();

  return (
    <section id="about" ref={ref}>
      {articles.map((article) => (
        <AboutItem key={article.id} item={article} />
      ))}
    </section>
  );
}

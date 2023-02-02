import AboutItem from "@/components/sections/about/about-item/about-item";
import { getAboutArticles } from "@/lib/about";

const articles = getAboutArticles();

export default function About() {
  return (
    <section id="about">
      {articles.map((article) => (
        <AboutItem key={article.id} item={article} />
      ))}
    </section>
  );
}

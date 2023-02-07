import AboutItem from "./about-item/about-item";
import { getAboutArticles } from "@/lib/content/about";
import useScrollIntoView from "@/hooks/useScrollIntoView";

const articles = getAboutArticles();

export default function About() {
  const ref = useScrollIntoView("about");

  return (
    <section ref={ref} id="about">
      {articles.map((article) => (
        <AboutItem key={article.id} item={article} />
      ))}
    </section>
  );
}

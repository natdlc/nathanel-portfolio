import AboutItem from "./about-item/about-item";
import { getAboutArticles } from "@/lib/about";
import { useEffect, useRef } from "react";
import { useRouter } from "next/router";

const articles = getAboutArticles();

export default function About() {
  const ref = useRef();
  const router = useRouter();

  useEffect(() => {
    if (ref.current && router.asPath === "/#about") {
      ref.current.scrollIntoView();
    }
  }, [ref.current, router.asPath]);

  return (
    <section ref={ref} id="about">
      {articles.map((article) => (
        <AboutItem key={article.id} item={article} />
      ))}
    </section>
  );
}

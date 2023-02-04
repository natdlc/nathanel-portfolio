import PageTransition from "@/components/common/page-transition/PageTransition";
import useSkillsNav from "@/hooks/useSkillsNav";
import Layout from "@/layout/layout";
import "@/styles/globals.css";
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  const skillsNav = useSkillsNav();
  return (
    <>
      <style jsx global>
        {`
          html {
            font-family: ${montserrat.style.fontFamily};
          }
        `}
      </style>
      <Layout skillsNav={skillsNav}>
        <Component dispatch={skillsNav.dispatch} {...pageProps} />
      </Layout>
    </>
  );
}

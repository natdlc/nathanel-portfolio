import useSkillsNav from "@/hooks/useSkillsNav";
import Layout from "@/layout/layout";
import "@/styles/globals.css";
import { Montserrat } from "@next/font/google";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function App({ Component, pageProps, router }) {
  const skillsNav = useSkillsNav();

  console.log(!router.asPath.includes("#"));

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
        <AnimatePresence
          mode="wait"
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Component
            key={router.asPath}
            dispatch={skillsNav.dispatch}
            {...pageProps}
          />
        </AnimatePresence>
      </Layout>
    </>
  );
}

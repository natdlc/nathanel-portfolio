import useSkillsNav from "@/hooks/useSkillsNav";
import Layout from "@/layout/layout";
import "@/styles/globals.css";
import { Montserrat } from "@next/font/google";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

let firstLoad = true;

const montserrat = Montserrat({ subsets: ["latin"] });

export default function App({ Component, pageProps, router }) {
  const [isSmooth, setIsSmooth] = useState();
  const skillsNav = useSkillsNav();

  useEffect(() => {
    router.events.on("routeChangeStart", () => setIsSmooth(false));
    firstLoad = false;
  }, []);

  return (
    <>
      <style jsx global>
        {`
          html {
            font-family: ${montserrat.style.fontFamily};
            scroll-behavior: ${isSmooth || firstLoad ? "smooth" : "auto"};
          }
        `}
      </style>
      <Layout skillsNav={skillsNav}>
        <AnimatePresence
          mode="wait"
          initial={false}
          onExitComplete={() => {
            window.scrollTo(0, 0);
            setTimeout(() => setIsSmooth(true), 200);
          }}
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

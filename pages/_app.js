import { MobileNavProvider } from "@/context/mobile-nav-context";
import useSkillsNav from "@/hooks/useSkillsNav";
import { useTransitionFix } from "@/hooks/useTransitionFix";
import Layout from "@/layout/layout";
import "@/styles/globals.css";
import { Montserrat } from "@next/font/google";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function App({ Component, pageProps, router }) {
  const skillsNav = useSkillsNav();

  useTransitionFix();

  useEffect(() => {
    window.addEventListener("load", () => console.log("window has loaded"));
  }, [router.events]);

  return (
    <>
      <style jsx global>
        {`
          html {
            font-family: ${montserrat.style.fontFamily};
          }
        `}
      </style>
      <MobileNavProvider>
        <Layout skillsNav={skillsNav}>
          {/* <AnimatePresence mode="wait" initial={false}> */}
          <Component
            key={router.asPath}
            dispatch={skillsNav.dispatch}
            {...pageProps}
          />
          {/* </AnimatePresence> */}
        </Layout>
      </MobileNavProvider>
    </>
  );
}

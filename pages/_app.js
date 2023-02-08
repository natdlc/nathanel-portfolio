import { MobileNavProvider } from "@/context/mobile-nav-context";
import useSkillsNav from "@/hooks/useSkillsNav";
import Layout from "@/layout/layout";
import "@/styles/globals.css";
import { Montserrat } from "@next/font/google";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

// temp import fix for styles unmounting abruptly

import "@/components/home/hero/hero.module.css";
import "@/components/home/about/about-item/about-item.module.css";
import "@/components/home/contact/contact.module.css";
import "@/components/home/work/work-item/work-item.module.css";
import "@/components/home/hero/hero.module.css";

import "@/components/skills/hero/hero.module.css";
import "@/components/skills/skill/skill.module.css";
import "@/components/skills/skill/tool/tool.module.css";

let firstLoad = true;

const montserrat = Montserrat({ subsets: ["latin"] });

export default function App({ Component, pageProps, router }) {
  const [isSmooth, setIsSmooth] = useState();
  const skillsNav = useSkillsNav();

  useEffect(() => {
    router.events.on("routeChangeStart", () => setIsSmooth(false));
    firstLoad = false;
  }, [router.events]);

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
      <MobileNavProvider>
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
      </MobileNavProvider>
    </>
  );
}

import { MobileNavProvider } from "@/context/mobile-nav-context";
import useSkillsNav from "@/hooks/useSkillsNav";
import Layout from "@/layout/layout";
import "@/styles/globals.css";
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function App({ Component, pageProps, router }) {
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
      <MobileNavProvider>
        <Layout skillsNav={skillsNav}>
          <Component
            key={router.asPath}
            dispatch={skillsNav.dispatch}
            {...pageProps}
          />
        </Layout>
      </MobileNavProvider>
    </>
  );
}

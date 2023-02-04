import Footer from "./footer/footer";
import FixedNav from "./nav/nav";

export default function Layout({ children, skillsNav }) {
  return (
    <>
      <FixedNav skillsNav={skillsNav} />
      <main>{children}</main>
      <Footer />
    </>
  );
}

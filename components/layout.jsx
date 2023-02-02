import Footer from "./footer/footer";
import FixedNav from "./nav/nav";

export default function Layout({ children }) {
  return (
    <>
      <FixedNav />
      <main>{children}</main>
      <Footer />
    </>
  );
}

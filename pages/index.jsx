import HomePage from "@/components/home/home";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Web Developer Portfolio - Nathanel</title>
        <meta
          name="description"
          content="Web developer portfolio of Nathanel - Creating better branding for businesses and professionals through websites"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </>
  );
}

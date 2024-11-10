import { useState } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import BgAnimation from "../components/BackgroundAnimation";
import data from "../data.json";

const Home = () => {
  const { intro, header } = data;
  const [darkModeActive, setDarkModeActive] = useState(true);
  return (
    <>
      <Head>
        <title>The Frontend Club</title>
      </Head>
      <Layout
        darkMode={darkModeActive}
        onClick={setDarkModeActive}
        header={header}
      >
        <section
          id="main"
          className="grid items-center mx-auto w-[calc(100vw-32px)] md:w-auto max-w-[1040px] box-content relative overflow-hidden grid-cols-2 mt-40"
        >
          <Hero intro={intro} />
          <BgAnimation darkMode={darkModeActive} />
        </section>
      </Layout>
    </>
  );
};

export default Home;

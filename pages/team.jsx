import { useState } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import data from "../data.json";
import Member from "../components/Member";

const Home = () => {
  const { header, team } = data;
  const [darkModeActive, setDarkModeActive] = useState(true);
  // Shuffle the team array
  const shuffledTeam = team.sort(() => Math.random() - 0.5);

  return (
    <>
      <Head>
        <title>TFC: Team</title>
      </Head>
      <Layout darkMode={darkModeActive} onClick={setDarkModeActive} header={header}>
        <div className="text-[20px] md:text-[50px] flex justify-center items-center">Meet our team of Awesome folks</div>
        <div className="flex gap-10 justify-center flex-wrap pb-32 mt-4">
          {shuffledTeam.map((data, i) => (
            <Member key={i} {...data} />
          ))}
        </div>
      </Layout>
    </>
  );
};

export default Home;

import { useRouter } from "next/router";
import React, { useState } from "react";
import data from "../../data.json";
import Layout from "../../components/Layout";
import Head from "next/head";

const EventPage = () => {
	const router = useRouter();
	const { eventName } = router.query;
	const pageData = data[eventName];
	const [darkModeActive, setDarkModeActive] = useState(true);
  const { header } = data;

	return (
		<>
			<Head>
				<title>{pageData?.name}</title>
			</Head>
			<Layout
				darkMode={darkModeActive}
				onClick={setDarkModeActive}
				header={header}>
				<div className="flex justify-center items-center h-[350px]">
					<h1 className="text-2xl md:text-3xl">Please wait, we are working on this page</h1>
				</div>
			</Layout>
		</>
	);
};

export default EventPage;

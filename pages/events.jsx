/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import data from "../data.json";
import Layout from "../components/Layout";
import Head from "next/head";

const EventsPage = () => {
  const { header } = data;
  const [darkModeActive, setDarkModeActive] = useState(true);
  return (
    <>
      <Head>
        <title>TFC: Events</title>
      </Head>
      <Layout darkMode={darkModeActive} onClick={setDarkModeActive} header={header}>
        <section className="pb-10 lg:pt-[120px] lg:pb-20">
          <div className="container mx-auto">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full px-4">
                <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                  <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">Our Events</h2>
                  <p className="text-base text-body-color">All events by T.F.C are listed below </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap p-8 mb-12">
              {data.events.map((event, idx) => (
                <EventCard key={idx} date={event.date} CardTitle={event.name} CardDescription={event.description} image={event.image} redirectUrl={event.redirect} />
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default EventsPage;

const EventCard = ({ image, date, CardTitle, CardDescription, redirectUrl }) => {
  return (
    <Link href={redirectUrl}>
      <div className="cursor-pointer w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mx-auto mb-10 max-w-[370px]">
          <div className="mb-8 overflow-hidden rounded">
            <Image src={image} alt="" className="w-full rounded-xl" width={650} height={400} />
          </div>
          <div>
            {date && <span className="inline-block py-1 mb-5 text-xs font-semibold leading-loose text-center text-blue-400 rounded dark:bg-primary bg-primary-dark">{date}</span>}
            <h3 className="mb-4 text-2xl font-semibold text-dark sm:text-2xl lg:text-xl xl:text-2xl">{CardTitle}</h3>
            <p className="text-base text-body-color">{CardDescription}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

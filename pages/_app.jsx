import { NextSeo } from "next-seo";
import "../styles/globals.css";

function App({ Component, pageProps }) {
  return (
    <>
      <NextSeo
        title="The Frontend Club"
        description="Looking for a place that provides a little bit of everything- from knowledge & skills to unbreakable bonds? Well it's safe to say you're on the right track!✨"
        openGraph={{
          type: "website",
          locale: "en_GB",
          url: "",
          description:
            "Community Page for The Frontend Club",
          site_name: "The Frontend Club",
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default App;

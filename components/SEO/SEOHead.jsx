import Head from "next/head";
import structuredData from "./structuredData";

function SeoHead() {
  return (
    <Head>
      {/* Essential Metas */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* SEO Metas */}
      <title>Mehedi Hasan | Front-End & WordPress Developer</title>
      <meta
        name="description"
        content="Hey! My name is Mehedi Hasan and I'm a UX Enthusiast with skills in Front-End and WordPress Development."
      />
      <meta name="robots" content="follow, index" />
      <link rel="canonical" href="https://developerhasan99.github.io/" />
      {/* Open Grap Info */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Mehedi Hasan | Front-End & WordPress Developer"
      />
      <meta
        property="og:description"
        content="Hey! My name is Mehedi Hasan and I'm a UX Enthusiast with skills in Front-End and WordPress Development."
      />
      <meta property="og:url" content="https://developerhasan99.github.io/" />
      <meta property="og:site_name" content="Mehedi Hasan" />
      <meta
        property="og:image"
        content="https://developerhasan99.github.io/Thumbnail-for-portfolio.png"
      />
      <meta
        property="og:image:secure_url"
        content="https://developerhasan99.github.io/Thumbnail-for-portfolio.png"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Mehedi Hasan" />
      <meta property="og:image:type" content="image/png" />
      {/* Twitter info */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Mehedi Hasan | Front-End & WordPress Developer"
      />
      <meta
        name="twitter:description"
        content="Hey! My name is Mehedi Hasan and I'm a UX Enthusiast with skills in Front-End and WordPress Development."
      />
      <meta
        name="twitter:image"
        content="https://developerhasan99.github.io/Thumbnail-for-portfolio.png"
      />
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Fonts and favicon */}
      <link rel="shortcut icon" href="./favicon.svg" type="image/x-icon" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
}

export default SeoHead;

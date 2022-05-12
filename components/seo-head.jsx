import Head from "next/head";

function SeoHead() {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Mehedi Hasan | Front-End & WordPress Developer</title>
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

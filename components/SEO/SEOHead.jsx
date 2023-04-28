import Head from "next/head";
import structuredData from "./structuredData";

const seoMeta = {
	name: "Mehedi Hasan",
	title: "Mehedi Hasan | Front-End & WordPress Developer",
	description:
		"Hey! My name is Mehedi Hasan and I'm a UX Enthusiast with skills in Front-End and WordPress Development.",
	robots: "follow, index",
	canonical: "https://developerhasan99.github.io/",
	thumbnail: "https://developerhasan99.github.io/social-thumbnail.jpg",
};

function SeoHead() {
	return (
		<Head>
			{/* Essential Meta's */}
			<meta charSet="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			{/* SEO Meta's */}
			<title>{seoMeta.title}</title>
			<meta name="description" content={seoMeta.description} />
			<meta name="robots" content={seoMeta.robots} />
			<link rel="canonical" href={seoMeta.canonical} />
			<meta property="og:locale" content="en_US" />
			<meta property="og:type" content="website" />
			<meta property="og:title" content={seoMeta.title} />
			<meta property="og:description" content={seoMeta.title} />
			<meta property="og:url" content={seoMeta.canonical} />
			<meta property="og:site_name" content={seoMeta.title} />
			<meta property="og:image" content={seoMeta.thumbnail} />
			<meta property="og:image:secure_url" content={seoMeta.thumbnail} />
			<meta property="og:image:width" content="1200" />
			<meta property="og:image:height" content="630" />
			<meta property="og:image:alt" content="Mehedi Hasan" />
			<meta property="og:image:type" content="image/png" />
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={seoMeta.title} />
			<meta name="twitter:description" content={seoMeta.description} />
			<meta name="twitter:image" content={seoMeta.thumbnail} />
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

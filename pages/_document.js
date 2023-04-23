import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const meta = {
    title: "Movses Israyelyan - Frontend (React.js) Developer",
    description:
      "A passionate javascript developer with more than 3+ years of experience in the field",
    type: "website",
  };
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://portfolio-movses.vercel.app/`} />
        <link rel="canonical" href={`https://portfolio-movses.vercel.app/`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Movses Israyelyan" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

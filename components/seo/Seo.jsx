import Head from "next/head";

const Seo = ({ pageTitle }) => (
  <>
    <Head>
      <title>
        {pageTitle &&
          `${pageTitle} || TomVisions - Creating automated solutions to real world problems}`}
      </title>
    </Head>
  </>
);

export default Seo;

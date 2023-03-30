import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import React from "react";
import Layout from "../../components/layout";

{
  /* Third party JS libarary uses in Script tag */
}
// {
//   <Script
//     src="https://connect.facebook.net/en_US/sdk.js"
//     strategy="lazyOnload"
//     onLoad={() => consol.log("Script loaded successfully")}
//   />;
// }
export default function FirstPost() {
  return (
    <>
      <Layout>
        <Head>
          <title>First Post</title>
        </Head>

        <h1>first-post</h1>
        <h2>
          Back to <Link href="/">Home</Link>
        </h2>

        <Image src="/images/profile.jpg" height={144} width={144} />
      </Layout>
    </>
  );
}

import Head from "next/head"; //for <head></head> tag
import Image from "next/image";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../components/styles/utils.module.css";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Sanjay, I am a Software Engineer at dapps.</p>
        <p>
          As a software engineer, my main focus is on designing, developing, and
          maintaining software applications. I have a strong foundation in
          programming languages such as JavaScript,Typescript, React and Next
          JS, and I have experience working with various software development
          methodologies such as Agile and Scrum.
        </p>
      </section>
    </Layout>
  );
}

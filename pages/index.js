import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Container from "../components/container";
import Intro from "../components/intro";
import Post from "../components/post";
import MoreStories from "../components/more-stories";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lifeline - Homepage</title>
        <meta name="description" content="An Healthcare App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Intro />
        <Post />
        <MoreStories />
        <Footer />
      </Container>

      <footer className={styles.footer}>
        <a
          href="https://signuldotdev-website.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made by{" "}
          <span className={styles.logo}>
            <Image src="/sanket.png" alt="Vercel Logo" width={32} height={30} />
          </span>{" "}
          Sanket
        </a>
      </footer>
    </div>
  );
}

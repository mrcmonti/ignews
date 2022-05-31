import Head from "next/head";
import styles from "./styles.module.scss";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | ignews</title>
      </Head>

      <main className={styles.container}>
          <div className={styles.posts}>
              <a href="#">
                  <time>12 de março de 2022</time>
                  <strong>Creating new page</strong>
                  <p>IN this guide, we will learn to create new post</p>
              </a>
              <a href="#">
                  <time>12 de março de 2022</time>
                  <strong>Creating new page asa</strong>
                  <p>IN this guide, we will learn to create new post</p>
              </a>
              <a href="#">
                  <time>12 de março de 2022</time>
                  <strong>Creating new page 3123</strong>
                  <p>IN this guide, we will learn to create new post</p>
              </a>
          </div>
      </main>
    </>
  );
}

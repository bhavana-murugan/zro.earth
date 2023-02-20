import styles from '../styles/Header.module.css'
import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from "next/router";

export default function Header({ bg = '', fore = '', title = '' }) {

  function setIsDarkTheme() {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.setAttribute("data-theme", 'dark');
    } else {
      document.documentElement.setAttribute("data-theme", 'light');
    }
  }

  useEffect(() => {
    const darkTheme = window.matchMedia("(prefers-color-scheme: dark)");
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.setAttribute("data-theme", 'dark');
    } else {
      document.documentElement.setAttribute("data-theme", 'light');
    }
    darkTheme.addEventListener('change', setIsDarkTheme);
    return () => darkTheme.removeEventListener('change', setIsDarkTheme);
  }, []);

  const router = useRouter()

  function back() {
    if (router.route !== '/') router.push('/');
  }

  function about() {
    if (router.route !== '/about') router.push('/about');
  }

  return (
    <div className={styles.flex} id={styles.head}>
      <Head>
        <title>ZゼRロ</title>
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" media="(prefers-color-scheme: light)" content={"#fff"} />
        <meta name="msapplication-TileColor" media="(prefers-color-scheme: dark)" content={"rgb(18, 18, 19)"} />
        <meta name="theme-color" media="(prefers-color-scheme: light)" content={"#fff"} />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content={"rgb(18, 18, 19)"} />
        <meta property="og:site_name" content='ZゼRロ' />
        <meta property="og:site_name" content='ZゼRロ' />
        {title && <meta property="og:title" content={title} />}
      </Head>

      <div className={styles.flexContainer}>

        {/* <Link as={`/`} href="/"
          style={{
            border: 'none', textDecoration: "none", color: 'transparent'
          }}> */}

        <span className={styles.panel} id={styles.ken}
          onClick={back}>
          Zゼ<br />Rロ
        </span>

        <span className={styles.panel} id={styles.face}
          onClick={about}>About
        </span>
        {/* </Link> */}
      </div>
    </div >
  );
}


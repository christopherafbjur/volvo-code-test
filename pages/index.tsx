import type { NextPage } from 'next'
import Head from 'next/head'
import Carousel from '../components/carousel'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Volvo Code Test</title>
        <meta name="description" content="Volvo code assignment by Christopher Af Bjur" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Carousel/>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/christopherafbjur"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by Christopher Af Bjur
        </a>
      </footer>
    </div>
  )
}

export default Home

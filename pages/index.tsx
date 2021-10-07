import type { GetStaticProps } from 'next'
import Head from 'next/head'
import Carousel from '../components/carousel'
import { getAllCars } from '../lib/cars'
import styles from '../styles/Home.module.css'

export const getStaticProps: GetStaticProps = () => {
  const allCarsData = getAllCars();
  return {
    props: {
      allCarsData,
    },
  };
}

const Home = ({ allCarsData }) => {
  return (
    <div>
      <Head>
        <title>Volvo Code Test</title>
        <meta name="description" content="Volvo code assignment by Christopher Af Bjur" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Carousel products={allCarsData}/>
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

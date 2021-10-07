import type { GetStaticProps } from "next";
import Head from "next/head";
import { useState } from "react";
import Carousel from "../components/carousel";
import DropDown from "../components/dropDown";
import { getAllCars } from "../lib/cars";
import styles from "../styles/Home.module.css";

export const getStaticProps: GetStaticProps = () => {
  const allCarsData = getAllCars();
  return {
    props: {
      allCarsData,
    },
  };
};

const Home = ({ allCarsData }) => {
  const [cars, setCars] = useState(allCarsData);


  const handleDropdownChange = async (selection) => {
    if(selection === 'all') return setCars(allCarsData);
    
    const filtered = allCarsData.filter((car) => {
      return car.bodyType.toLowerCase().includes(selection.toLowerCase());
    });

    setCars(filtered)
  };

  return (
    <div>
      <Head>
        <title>Volvo Code Test</title>
        <meta
          name="description"
          content="Volvo code assignment by Christopher Af Bjur"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <DropDown onChange={handleDropdownChange} />
        <Carousel products={cars} />
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
  );
};

export default Home;

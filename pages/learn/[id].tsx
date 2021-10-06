
import { GetStaticPaths, GetStaticProps } from "next";
import { getAllCarIds, getCarData } from "../../lib/cars";
import { Car } from "../../types";

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const carData = await getCarData(params?.id);
    return {
      props: {
        carData,
      },
    };
  }

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllCarIds();
    return {
      paths,
      fallback: false,
    };
  }

  export default function LearnPage({ carData }: { carData: Car }) {
    return (
      <div>
        <h1>Learn Page</h1>
        <pre>{JSON.stringify(carData)}</pre>
      </div>
    );
  }
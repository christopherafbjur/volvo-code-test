
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { getAllCarIds, getCarData } from "../../lib/cars";

export const getStaticProps: GetStaticProps = ({ params }) => {
    const product =  getCarData(params?.id);
    return {
      props: {
        product,
      },
    };
  }

export const getStaticPaths: GetStaticPaths = () => {
    const paths = getAllCarIds();
    return {
      paths,
      fallback: false,
    };
  }

  export default function LearnPage({ product }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
      <div>
        <h1>Learn Page</h1>
        <pre>{JSON.stringify(product)}</pre>
      </div>
    );
  }
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { getAllCarIds, getCarData } from "../../lib/cars";

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const product = getCarData(params?.id);
  return {
    props: {
      product,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllCarIds();

  return {
    paths,
    fallback: false,
  };
};

export default function ShopPage({ product }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <h1>Shop Page</h1>
      <pre>{JSON.stringify(product)}</pre>
    </div>
  );
}

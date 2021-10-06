
import { GetStaticPaths, GetStaticProps } from "next";
import { getAllCarIds, getCarData } from "../../lib/cars";

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const postData = await getCarData(params?.id);
    return {
      props: {
        postData,
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

export default function ShopPage(){
    return <div>Shop Page</div>
}
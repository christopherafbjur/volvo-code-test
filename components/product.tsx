import Image from "next/image";
import { Block, Card, Flex, Spacer, Text } from "vcc-ui";
import { toUppercase } from "../lib/helpers";
import { ProductProps } from "../types";
import ProductLink from "./productLink";

export default function Product(props: ProductProps) {
  const { id, title, subtitle, type, imageUrl } = props;

  return (
    <Card>
      <Block extend={{ padding: "10px" }}>
        <Text subStyle="emphasis" variant="bates" extend={{ color: "gray" }}>
          {toUppercase(type)}
        </Text>
        <Flex
          extend={{
            flexDirection: "row",
            justifyContent: "flex-start",
            flex: "0 0 auto",
            width: "100%",
          }}
        >
          <Text subStyle="emphasis">{title}</Text>
          <Spacer />
          <Text extend={{ color: "gray" }}>{subtitle}</Text>
        </Flex>
      </Block>
      <Spacer />
      {/* <img src={imageUrl}></img> */}
      <Block extend={{ position: "relative", height: "200px" }}>
        <Image layout="fill" src={imageUrl} alt={title} objectFit="cover" loading="lazy" />
      </Block>
      <Flex
        extend={{
          flexDirection: "row",
          justifyContent: "center",
          padding: "10px",
        }}
      >
        <ProductLink text="Learn" url={`/learn/${id}`} />
        <Spacer />
        <Spacer />
        <Spacer />
        <ProductLink text="Shop" url={`/shop/${id}`} />
      </Flex>
    </Card>
  );
}

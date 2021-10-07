import { Card, CardContent, Flex, Spacer, Text } from "vcc-ui";
import { ProductProps } from "../types";

export default function Product(props: ProductProps) {
  const { title, subtitle, type, imageUrl } = props;


  console.log('props is', props)
  return (
    <Card>
      <Flex
        extend={{
          justifyContent: "center",
          padding: 8,
        }}
      >
        <Text variant="bates" extend={{ color: "gray" }}>
          {type}
        </Text>
      </Flex>
      <CardContent>
        <Text variant="ootah">{title}</Text>
        <Spacer />
        <Text>{subtitle}</Text>
        <Spacer />
        <img src={imageUrl}></img>
      </CardContent>
    </Card>
  );
}

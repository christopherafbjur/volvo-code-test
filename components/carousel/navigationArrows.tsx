import { Flex } from "vcc-ui";
import Chevron from "../chevron";
export default function NavigationArrows({slider}) {
  if(!slider) return null;
  
  return (
    <Flex
      extend={{
        width: "60px",
        float: "right",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Chevron
        direction="left"
        onClick={(e) => e.stopPropagation() || slider.prev()}
      />
      <Chevron
        direction="right"
        onClick={(e) => e.stopPropagation() || slider.next()}
      />
    </Flex>
  );
}

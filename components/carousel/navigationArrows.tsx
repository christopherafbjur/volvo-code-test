import { Flex } from "vcc-ui";
import { CarouselNavigationArrowProps } from "../../types";
import ArrowButton from "../arrowButton";

export default function NavigationArrows({ slider }: CarouselNavigationArrowProps) {
  if (!slider) return null;

  return (
    <Flex
      extend={{
        width: "60px",
        float: "right",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <ArrowButton
        direction="left"
        onClick={(e) => e.stopPropagation() || slider.prev()}
      />
      <ArrowButton
        direction="right"
        onClick={(e) => e.stopPropagation() || slider.next()}
      />
    </Flex>
  );
}

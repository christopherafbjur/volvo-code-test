import { Arrow, Block, Click } from "vcc-ui";
import { ArrowButtonProps } from "../types";

export default function ArrowButton(props: ArrowButtonProps) {
  return (
    <Click
      extend={{ borderRadius: "50%", border: "1px solid gray", padding: "5px" }}
      onClick={props.onClick}
    >
      <Block as='div' extend={{ width: "15px", height: "15px" }}>
        <Arrow direction={props.direction} color="gray" size={15} />
      </Block>
    </Click>
  );
}

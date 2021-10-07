import { Arrow, Click } from "vcc-ui";

export default function Chevron(props) {
  return (
    <Click extend={{ background: "ghostwhite" }} onClick={props.onClick}>
      <Arrow direction={props.direction} color="seagreen" size={20} />
    </Click>
  );
}

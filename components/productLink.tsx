import Link from "next/link";
import { Link as VolvoLink } from "vcc-ui";

export default function ProductLink({ url, text }) {
  return (
    <>
      <Link href={url}>
        <VolvoLink arrow="right">{text}</VolvoLink>
      </Link>
    </>
  );
}

import Link from "next/link";
import { Link as VolvoLink } from "vcc-ui";
import { ProductLinkProps } from "../types";

export default function ProductLink({ url, text }: ProductLinkProps) {
  return (
    <>
      <Link href={url} passHref>
        <VolvoLink arrow="right">{text}</VolvoLink>
      </Link>
    </>
  );
}

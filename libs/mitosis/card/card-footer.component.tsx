import {useMetadata} from "@builder.io/mitosis";
import {WithChildren} from "@fundamental/mitosis/shared";

type CardFooterProps = WithChildren<{}>;

useMetadata({
  encapsulation: 2
})
export default function CardFooter(props: CardFooterProps) {
  return <div className={"fd-card__footer"}>
    {props.children}
  </div>;
}

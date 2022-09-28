import {WithChildren} from '@fundamental/mitosis/shared';

export default function CardFooterActions(props: WithChildren) {
  return <div className={"fd-card__footer-actions"}>
    {props.children}
  </div>;
}

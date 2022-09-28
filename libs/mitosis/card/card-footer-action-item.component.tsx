import {WithChildren} from '@fundamental/mitosis/shared';

export default function CardFooterActionItem(props: WithChildren) {
  return <div className={"fd-card__footer-actions-item"}>
    {props.children}
  </div>;
}

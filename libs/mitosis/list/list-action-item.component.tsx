import {useMetadata} from "@builder.io/mitosis";
import ListItem, {ListItemProps} from "./list-item.component";

type ListActionItemProps = ListItemProps;

useMetadata({
  encapsulation: 2,
  uses: [{path: './list-item.component', imports: {ListItem: 'default'}}],
})
export default function ListActionItem(props: ListActionItemProps) {
  return <ListItem action={true} header={props.header} classname={props.classname} compact={props.compact} interractive={props.interractive}>
    <button className={"fd-list__title"}>
      {props.children}
    </button>
  </ListItem>
}

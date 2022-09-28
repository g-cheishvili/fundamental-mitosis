import {useMetadata} from "@builder.io/mitosis";
import {Button, ButtonProps} from "@fundamental/mitosis/button";

type ListItemButtonProps = ButtonProps;

useMetadata({
  encapsulation: 2,
  uses: [{path: "@fundamental/mitosis/button", imports: {Button: 'Button'}}],
})
export default function ListItemButton(props: ListItemButtonProps) {
  return <Button fdType={props.fdType} compact={props.compact} classname={props.classname + ' fd-list__button'}
                 disabled={props.disabled}>
    {props.children}
  </Button>
}

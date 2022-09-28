import {HasValue, IsSelectable} from "@fundamental/mitosis/shared";
import {Button, ButtonProps} from "@fundamental/mitosis/button";
import {Icon} from "@fundamental/mitosis/icon";
import {Show, useMetadata} from "@builder.io/mitosis";

export type SegmentButton = HasValue<IsSelectable<ButtonProps>, string> & { content?: string; icon?: string };
type SegmentProps = {
  button: SegmentButton;
  value: string;
  compact?: boolean;
}

useMetadata({
  encapsulation: 2,
  uses: [
    {path: '@fundamental/mitosis/button', imports: {Button: 'Button'}},
    {path: '@fundamental/mitosis/icon', imports: {Icon: 'Icon'}}
  ]
})
export default function Segment(props: SegmentProps) {
  return <Button
    classname={props.button.classname + (props.button.value === props.value ? " is-selected" : "")}
    fdType={props.button.fdType}
    compact={props.compact || props.button.compact}
    disabled={props.button.disabled}
  >
    <Show when={props.button.icon}>
      <Icon name={props.button.icon}></Icon>
    </Show>
    {props.button.content}
  </Button>;
}

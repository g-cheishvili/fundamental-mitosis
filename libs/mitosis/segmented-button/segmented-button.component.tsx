import {For, useMetadata, useStore} from "@builder.io/mitosis";
import {WithClassname} from "@fundamental/mitosis/shared";
import Segment, {SegmentButton} from "./segment.component";

export type SegmentedButtonProps = WithClassname<{
  buttons: Array<SegmentButton>,
  value: string,
  valueChange: (value: string) => void,
}>;

useMetadata({
  styleUrls: ['./segmented-button.component.css'],
  encapsulation: 2,
  outputs: ['valueChange'],
  controlValueAccessor: true,
  uses: [
    {path: './segment.component', imports: {Segment: 'default'}},
  ]
})
export default function SegmentedButton(props: SegmentedButtonProps) {
  const state = useStore({
    valueChangeHandler(value: string) {
      props.valueChange(value);
    }
  });
  return <div className={"fd-segmented-button"}>
    <For each={props.buttons}>
      {(button) => <Segment
        button={button}
        value={props.value}
        onClick={() => state.valueChangeHandler(button.value)}
      >
      </Segment>}
    </For>
  </div>;
}

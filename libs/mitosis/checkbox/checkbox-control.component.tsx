import {classesToString, WithChildren, WithClassname, WithDisabled} from '@fundamental/mitosis/shared';
import {useMetadata, useStore} from "@builder.io/mitosis";

type CheckboxProps = WithChildren<WithDisabled<WithClassname<{
  value?: string;
  valueChange: (val: string) => any;
  compact?: boolean;
}>>>

useMetadata({
  styleUrls: ['./checkbox.component.css'],
  controlValueAccessor: true,
  outputs: ['valueChange']
})
export default function CheckboxControl(props: CheckboxProps) {
  const state = useStore({
    get classes() {
      return classesToString(["fd-checkbox", props.compact && "fd-checkbox--compact", props.classname])
    },
    valueChangeHandler(eventTarget: any) {
      props.valueChange(eventTarget.value);
    }
  });
  return <input className={state.classes} value={props.value} onChange={state.valueChangeHandler}/>
}

import {classesToString, WithChildren, WithClassname, WithDisabled} from '@fundamental/mitosis/shared';
import {Show, useMetadata, useStore} from "@builder.io/mitosis";

type FormItemProps = WithChildren<WithDisabled<WithClassname<{
  required?: boolean;
  labelPosition?: 'before' | 'after';
  slotLabel: any;
  slotControl: any;
}>>>

useMetadata({
  styleUrls: ['./form-item.component.css']
})
export default function FormItem(props: FormItemProps) {
  const state = useStore({
    get labelClasses() {
      return classesToString(["fd-form-label", props.required && "fd-form-label--required"])
    }
  });
  return <div className={"fd-form-item"}>
    <Show when={!props.labelPosition || props.labelPosition === 'before'}>
      <div className={state.labelClasses}>{props.slotLabel}</div>
    </Show>
    {props.slotControl}
    <Show when={props.labelPosition === 'after'}>
      <div className={state.labelClasses}>{props.slotLabel}</div>
    </Show>
  </div>
}

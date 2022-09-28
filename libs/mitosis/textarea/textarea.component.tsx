import {
  classesToString,
  classnames,
  WithChildren,
  WithClassname,
  WithDisabled,
  WithReadonly
} from '@fundamental/mitosis/shared';
import {onMount, useMetadata, useStore} from "@builder.io/mitosis";


type TextareaProps = WithChildren<WithDisabled<WithReadonly<WithClassname<{
  compact?: boolean;
  placeholder?: string;
  value?: string;
  valueChange: (val: string) => any
}>>>>

useMetadata({
  styleUrls: ['./textarea.component.css'],
  controlValueAccessor: true,
  outputs: ['valueChange']
})
export default function Textarea(props: TextareaProps) {
  const state = useStore({
    get classes() {
      return classesToString([
        'fd-textarea',
        props.compact ? 'fd-textarea--compact' : null,
        props.disabled ? classnames.disabled : null,
        props.readonly ? classnames.readonly : null,
        props.classname
      ]);
    },
    valueChangeHandler(eventTarget: any) {
      props.valueChange(eventTarget.value);
    }
  });
  onMount(() => {
    props.placeholder = props.placeholder || 'Enter text';
  })
  return <textarea
    value={props.value}
    className={state.classes}
    disabled={props.disabled}
    placeholder={props.placeholder}
    onInput={e => state.valueChangeHandler(e.target)}
  />
}

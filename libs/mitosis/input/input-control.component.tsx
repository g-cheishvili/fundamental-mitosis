import {
  classesToString,
  classnames,
  WithChildren,
  WithClassname,
  WithDisabled,
  WithReadonly
} from '@fundamental/mitosis/shared';
import {onMount, useMetadata, useStore} from "@builder.io/mitosis";


type InputProps = WithChildren<WithDisabled<WithReadonly<WithClassname<{
  compact?: boolean;
  placeholder?: string;
  value?: string;
  valueChange: (val: string) => any
}>>>>

useMetadata({
  styleUrls: ['./input.component.css'],
  encapsulation: 2,
  controlValueAccessor: true,
  outputs: ['valueChange']
})
export default function InputControl(props: InputProps) {
  const state = useStore({
    get classes() {
      return classesToString([
        'fd-input',
        props.compact ? 'fd-input--compact' : null,
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
  return <input
    className={state.classes}
    disabled={props.disabled}
    placeholder={props.placeholder}
    value={props.value || ''}
    onInput={e => state.valueChangeHandler(e.target)}
  />
}

import {onMount, useMetadata, useStore} from "@builder.io/mitosis";

type IconColor =
  | 'default'
  | 'contrast'
  | 'interactive'
  | 'tile'
  | 'marker'
  | 'critical'
  | 'negative'
  | 'neutral'
  | 'positive';

export type IconProps = {
  color?: IconColor;
  name: string;
  tnt?: boolean;
  businessSuiteInAppSymbols?: boolean;
};

useMetadata({
  styleUrls: ['./icon.component.css']
})
export default function Icon(props: IconProps) {
  const state = useStore({
    get baseClass() {
      const base = 'sap-icon';
      if (props.tnt) {
        return `${base}-TNT`;
      }
      if (props.businessSuiteInAppSymbols) {
        return `${base}-businessSuiteInAppSymbols`;
      }
      return base;
    },
    get classes() {
      const base = state.baseClass;
      return `${base} ${base}--${props.name} ${base}--${props.color || 'default'}`;
    }
  });
  onMount(() => {
    if (props.tnt && props.businessSuiteInAppSymbols) {
      throw new Error('Cannot use both tnt and businessSuiteInAppSymbols');
    }
  })
  return <span className={state.classes}></span>;
}

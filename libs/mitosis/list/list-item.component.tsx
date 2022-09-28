import {classesToString, WithChildren, WithClassname} from '@fundamental/mitosis/shared';
import {useMetadata, useStore} from "@builder.io/mitosis";

export type ListItemProps = WithChildren<WithClassname<{
  compact?: boolean;
  header?: boolean;
  action?: boolean;
  interractive?: boolean;
}>>

useMetadata({
  encapsulation: 2 // ViewEncapsulation.None
})
export default function ListItem(props: ListItemProps) {
  const state = useStore({
    get classes() {
      return classesToString([
        'fd-list__item',
        props.header ? 'fd-list__group-header' : '',
        props.compact ? 'fd-list__item--compact' : null,
        props.action ? 'fd-list__item--action' : null,
        props.interractive ? 'fd-list__item--interractive' : null,
        props.classname
      ]);
    },
  });
  return <li className={state.classes}>
    {props.children}
  </li>
}

import {classesToString, WithChildren, WithClassname} from '@fundamental/mitosis/shared';
import {useMetadata, useStore} from "@builder.io/mitosis";

type ListItemProps = WithChildren<WithClassname<{}>>;

useMetadata({
  encapsulation: 2 // ViewEncapsulation.None
})
export default function ListItemTitle(props: ListItemProps) {
  const state = useStore({
    get classes() {
      return classesToString([
        'fd-list__title',
        props.classname
      ])
    }
  });
  return <span className={state.classes}>{props.children}</span>
}

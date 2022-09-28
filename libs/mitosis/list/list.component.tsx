import {classesToString, WithChildren, WithClassname} from '@fundamental/mitosis/shared';
import {useMetadata, useRef, useStore} from "@builder.io/mitosis";

type ListProps = WithChildren<WithClassname<{
  compact?: boolean;
  noBorder?: boolean;
}>>

useMetadata({
  styleUrls: ['./list.component.css'],
  encapsulation: 2 // ViewEncapsulation.None
})
export default function List(props: ListProps) {
  const listRef = useRef<HTMLUListElement>();
  const state = useStore({
    get classes() {
      return classesToString([
        'fd-list',
        props.noBorder ? 'fd-list--no-border' : null,
        props.compact ? 'fd-list--compact' : null,
        props.classname
      ]);
    },
  });
  return <ul ref={listRef} className={state.classes}>
    {props.children}
  </ul>
}

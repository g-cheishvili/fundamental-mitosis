import {useMetadata, useStore} from "@builder.io/mitosis";
import {classesToString, WithChildren} from "@fundamental/mitosis/shared";

export type CardProps = WithChildren<{
  slotTitle?: any;
  slotContent?: any;
}>;

useMetadata({
  styleUrls: ['./card.component.css'],
  encapsulation: 2
})
export default function Card(props: CardProps) {
  const state = useStore({
    get classes() {
      return classesToString(['fd-card']);
    }
  });
  return <div className={state.classes}>
    <a className="fd-card__header" tabIndex={0}>
      <div class="fd-card__header-text">
        <div class="fd-card__title-area">
          <div class="fd-card__title">{props.slotTitle}</div>
        </div>
      </div>
    </a>
    <div class="fd-card__content">
      {props.slotContent}
    </div>
    {props.children}
  </div>;
}

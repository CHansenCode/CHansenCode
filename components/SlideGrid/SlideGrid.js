import css from './SlideGrid.module.scss';

export const SlideGrid = ({ ...props }) => {
  switch (props.type) {
    case 'classic':
      return (
        <div className={`${css.base} ${css.classic}`}>{props.children}</div>
      );
      break;

    case 'horizontal':
      return (
        <div className={`${css.base} ${css.horizontal}`}>{props.children}</div>
      );
      break;

    default:
      return <div className={`${css.base}`}>Incorrect type prop entered.</div>;
      break;
  }
};

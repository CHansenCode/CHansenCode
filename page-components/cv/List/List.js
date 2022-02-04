import css from './style.module.scss';

export const List = ({ ...props }) => {
  return <ul className={css.list}>{props.children}</ul>;
};

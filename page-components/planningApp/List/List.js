import css from './style.module.scss';

export const List = ({ children, ...props }) => {
  return <ul className={css.list}>{children}</ul>;
};

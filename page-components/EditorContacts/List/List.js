import css from './style.module.scss';

export const List = ({ children }) => {
  return <div className={css.list}>{children}</div>;
};

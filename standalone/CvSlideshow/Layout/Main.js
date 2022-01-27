import css from './Main.module.scss';

export const Main = ({ children }) => {
  return <div className={css.main}>{children}</div>;
};

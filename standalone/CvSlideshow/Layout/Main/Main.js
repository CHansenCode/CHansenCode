import css from './Main.module.scss';

export const Main = ({ ...props }) => {
  return (
    <div className={css.main}>
      <div>{props.children}</div>
    </div>
  );
};

import css from './bsview.module.scss';

export const BacksideView = ({ ...props }) => {
  //

  const iStyle = {};

  return (
    <div className={css.main}>
      <>{props.children}</>
    </div>
  );
};

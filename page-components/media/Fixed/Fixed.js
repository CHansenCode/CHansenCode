import css from './Fixed.module.scss';

export const Fixed = ({ toggle, children }) => {
  return (
    <div className={`bg pc3b ${css.fixed}${toggle ? ` ${css.open}` : ''}`}>
      <div className={css.inner}>{children}</div>
    </div>
  );
};

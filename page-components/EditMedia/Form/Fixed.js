import css from './style.module.scss';

export const Fixed = ({ children, ...props }) => {
  let open = props.activeId || props.controller.isCreating ? true : false;

  return (
    <div className={`${css.fixed}${open ? ` ${css.fixed_open}` : ''}`}>
      <div className={css.inner}>{children}</div>
    </div>
  );
};

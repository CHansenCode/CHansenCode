import css from './bsview.module.scss';

export const Menu = ({ ...props }) => {
  return (
    <header className={`pc1b ${css.menu}`}>
      {props.title && (
        <div className={css.title}>
          <h4 className={`sc ${css.title}`}>{props.title}</h4>
        </div>
      )}

      <div className={css.page_menu}>
        {props.children && props.children.length > 1 && props.children[0]}
      </div>

      {props.children && props.children.length > 1
        ? props.children[1]
        : props.children}
    </header>
  );
};

import { Controllers } from './Controllers';

import css from './bsview.module.scss';

export const TopBar = ({ title, ...props }) => {
  //

  let contrBtns = props.create || props.edit || props.delete ? true : false;

  return (
    <header className={`pc1b ${css.menu}`}>
      {title && (
        <div className={css.title}>
          <h4 className="sc">{title}</h4>
        </div>
      )}

      <div className={css.page_menu}>{props.children}</div>

      {contrBtns ? <Controllers {...props} /> : <div />}
    </header>
  );
};

import { useState } from 'react';

import css from './Fold.module.scss';

export const Fold = props => {
  const [open, setOpen] = useState(!props.fold ? true : false);

  const iStyle = {
    height: open ? 'min-content' : '1px',
    opacity: open ? '1' : '0',
    transform: open ? 'translateY(0)' : 'translateY(0.25rem)',
  };

  return (
    <div className={css.wrapper}>
      <button className={`pc5b ${css.button}`} onClick={() => setOpen(!open)}>
        <p>{props.title}</p>
        <div>{`<`}</div>
      </button>

      <div style={iStyle} className={`pc05bg ${css.child_wrapper}`}>
        {props.children}
      </div>
    </div>
  );
};

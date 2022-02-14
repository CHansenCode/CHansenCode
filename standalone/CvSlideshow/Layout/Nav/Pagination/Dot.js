import { useState } from 'react';

import css from './Dot.module.scss';

export const Dot = ({ currentPage, activePage, ...props }) => {
  const [hover, setHover] = useState(false);
  //
  const active = currentPage === activePage;

  const iStyle = {
    dot: {
      height: active ? '1.5rem' : '0.75rem',
      width: active ? '1.5rem' : '0.75rem',
    },
    pageName: {
      opacity: hover ? '1' : '0',
    },
  };

  return (
    <div
      className={css.interactive_box}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={props.onClick}
    >
      <div style={iStyle.dot} className={css.graphical_dot} />
      <h6 style={iStyle.pageName} className={css.page_name}>
        {props.page}
      </h6>
    </div>
  );
};

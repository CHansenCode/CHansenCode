import React, { useState } from 'react';

import css from './Avatar.module.scss';

export const Avatar = () => {
  //
  const [open, setOpen] = useState(false);

  return (
    <div className={css.wrapper}>
      <div>ava</div>

      <ul className={`${css.ul} ${open ? css.ul_open : ''}`}>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
      </ul>
    </div>
  );
};

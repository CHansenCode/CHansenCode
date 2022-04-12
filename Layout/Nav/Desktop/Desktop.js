import React, { useState } from 'react';

import css from './Desktop.module.scss';

export const Desktop = ({ ...props }) => {
  return (
    <div className={css.desktop}>
      <h4>desk</h4>

      {props.children}
    </div>
  );
};

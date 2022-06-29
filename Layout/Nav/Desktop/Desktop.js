import React, { useState } from 'react';

import css from './Desktop.module.scss';

export const Desktop = ({ ...props }) => {
  return <div className={css.desktop}>{props.children}</div>;
};

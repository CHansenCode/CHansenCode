import React from 'react';

import css from './Slide.module.scss';

export const Slide = ({ children }) => {
  return <div className={css.slide}>{children}</div>;
};

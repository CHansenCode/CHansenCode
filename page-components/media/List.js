import React from 'react';

import css from './List.module.scss';

export const List = ({ children }) => {
  return <ul className={css.list}>{children}</ul>;
};

import React from 'react';

import css from './List.module.scss';

export const List = ({ ...props }) => {
  return <ul className={css.list}>{props.children}</ul>;
};

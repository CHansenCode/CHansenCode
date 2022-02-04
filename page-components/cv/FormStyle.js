import React from 'react';

import css from './Form.module.scss';

export const FormStyle = ({ children }) => {
  return <div className={css.form}>{children}</div>;
};

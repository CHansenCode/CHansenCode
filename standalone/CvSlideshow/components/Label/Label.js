import React from 'react';

import css from './Label.module.scss';

export const Label = ({ label, children, ...props }) => {
  return children || props.text ? (
    <div className={css.wrapper}>
      <h6 className={css.label}>{label ? label : 'prop: label empty'}</h6>

      <div>
        {props.text && <p>{props.text}</p>}

        {children}
      </div>
    </div>
  ) : (
    <h6 className={css.label}>{label ? label : 'prop: label empty'}</h6>
  );
};

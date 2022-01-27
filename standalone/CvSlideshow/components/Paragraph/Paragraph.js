import React from 'react';

import css from './Paragraph.module.scss';

export const Paragraph = ({ title, children, ...props }) => {
  return (
    <div className={`${css.paragraph} ${props.className}`}>
      {title && <h4 className={css.title}>{title}</h4>}

      <div className={css.child_wrapper}>{children}</div>
    </div>
  );
};

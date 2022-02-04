import React, { useState } from 'react';

import css from './Dropdown.module.scss';

export const Dropdown = ({ children, ...props }) => {
  //
  const [open, setOpen] = useState(false);

  return (
    <div className={css.wrapper}>
      <header></header>
      <ul>
        {/* {children.map((c, i) => (
          <li key={`${props.uniqueKey}dropdown${i}`}></li>
        ))} */}
        {React.Children.map(children, c => {
          return React.cloneElement(c, {
            ...props,
          });
        })}
      </ul>
    </div>
  );
};

import React from 'react';

import css from './ToggleWidth.module.scss';

export const ToggleWidth = ({ activeId, children }) => {
  const iStyle = {
    a: {
      width: activeId ? '30%' : '100%',
    },
    b: {
      width: activeId ? '70%' : '0.1%',
      opacity: activeId ? '1' : '0',
    },
  };

  return (
    <div className={css.container}>
      <div style={iStyle.a}>
        {children && children.length > 0 && children[0]}
      </div>

      <div style={iStyle.b}>
        {children && children.length > 1 && children[1]}
      </div>
    </div>
  );
};

import React from 'react';

import css from './Main.module.scss';

export const Main = ({ children, ...props }) => {
  //
  const iStyle = {
    marginLeft: props.controller.showDashboard ? '14rem' : '0',
    width: props.controller.showDashboard ? 'calc(100vw - 14rem)' : '100vw',
  };

  return (
    <main
      id="main_container"
      style={iStyle}
      className={`pc5b ${css.main_container}`}
    >
      {React.Children.map(children, child => {
        return React.cloneElement(child, {
          ...props,
        });
      })}
    </main>
  );
};

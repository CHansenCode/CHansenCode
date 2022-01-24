import React from 'react';

import css from './Main.module.scss';

export const Main = ({ children, ...props }) => {
  //
  const iStyle = {
    marginLeft: props.appController.showDashboard ? '14rem' : '0',
    width: props.appController.showDashboard ? 'calc(100vw - 14rem)' : '100vw',
  };

  return (
    <main id="main_container" style={iStyle} className={css.main_container}>
      {React.Children.map(children, child => {
        return React.cloneElement(child, {
          ...props,
        });
      })}
    </main>
  );
};

import React from 'react';

import css from './Main.module.scss';

export const Main = ({ children, ...props }) => {
  return (
    <main
      id="main_container"
      className={`pc5b ${css.main_container}${
        props.controller.isLoggedIn ? ` ${css.is_logged_in}` : ''
      }${props.controller.dashboardVisible ? ` ${css.dashboard_visible}` : ''}`}
    >
      {React.Children.map(children, child => {
        return React.cloneElement(child, {
          ...props,
        });
      })}
    </main>
  );
};

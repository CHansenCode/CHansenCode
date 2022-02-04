import React from 'react';
import useUser from 'lib/useUser';

import css from './Main.module.scss';

export const Main = ({ children, ...props }) => {
  //
  const { user } = useUser();

  let collapsed = !props.controller.dashboardVisible;
  let loggedIn = props.controller.isLoggedIn;

  return (
    <main
      className={`${css.main} ${collapsed ? `${css.collapsed}` : ''} ${
        loggedIn ? `${css.loggedIn}` : ''
      }`}
    >
      {React.Children.map(children, child => {
        return React.cloneElement(child, {
          ...props,
        });
      })}
    </main>
  );
};

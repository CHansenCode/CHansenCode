import React from 'react';
import { useRouter } from 'next/router';
import useUser from 'lib/useUser';

import css from './Main.module.scss';

export const Main = ({ children, ...props }) => {
  //
  const router = useRouter();
  //
  const { user } = useUser();

  let collapsed = !props.controller.dashboardVisible;
  let loggedIn = props.controller.isLoggedIn;

  const iStyle = {
    marginLeft: router.pathname === '/cv' && 0,
    marginBottom: router.pathname === '/cv' && 0,
    width: router.pathname === '/cv' && '100vw',
  };

  return (
    <main
      style={iStyle}
      className={`${css.main} ${collapsed ? `${css.collapsed}` : ''} ${
        loggedIn ? `${css.loggedIn}` : ''
      }`}
    >
      {}
      {React.Children.map(children, child => {
        return React.cloneElement(child, {
          ...props,
        });
      })}
    </main>
  );
};

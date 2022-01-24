import React, { useEffect, useState } from 'react';

import { Header } from './Header';
import { Links } from './Links';
import { Footer } from './Footer';

import css from './Dashboard.module.scss';

export const Dashboard = ({ ...props }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 200);
  }, []);

  const iStyle = {
    left: props.controller.showDashboard ? '0' : '-14rem',
  };

  return (
    <aside style={iStyle} className={`${css.aside} pc1b`}>
      <nav className={css.nav}>
        <Header {...props} />

        <Links {...props} />

        <Footer {...props} />
      </nav>
    </aside>
  );
};

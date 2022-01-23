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
    left: loaded ? '0' : '0',
  };

  return (
    <aside style={iStyle} className={`${css.aside} bg pc3b`}>
      <nav className={css.nav}>
        <Header {...props} />

        <Links {...props} />

        <Footer {...props} />
      </nav>
    </aside>
  );
};

import { useState } from 'react';
import { Dev, GlobalStyles, Main, Meta, Nav } from './';
import { Dashboard } from './';
import { useColors } from 'lib/useColor';
import useUser from 'lib/useUser';

export function Layout({ ...props }) {
  const { user } = useUser();
  const { colors, setColors } = useColors();
  const [appController, setAppController] = useState({
    showDashboard: true,
  });

  props = {
    ...props,
    colors,
    setColors,
    appController,
    setAppController,
  };

  return (
    <>
      {process.env.NODE_ENV === 'development' && <Dev {...props} />}

      <Meta {...props} />

      <GlobalStyles {...props} />

      {/* CMS */}
      <Dashboard {...props} />

      <Nav {...props} />

      <Main {...props} />
    </>
  );
}

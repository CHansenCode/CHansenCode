import { useState, useEffect } from 'react';
import { Dev, GlobalStyles, Main, Meta, Nav } from './';
import { Dashboard } from './';
import { useColors } from 'lib/useColor';
import useUser from 'lib/useUser';

export function Layout({ ...props }) {
  const { user } = useUser();
  const { colors, setColors } = useColors();
  const [controller, setController] = useState({
    showDashboard: false,
  });

  useEffect(() => {
    user?.isLoggedIn
      ? setController({ ...controller, showDashboard: true })
      : setController({ ...controller, showDashboard: false });
  }, [user]);

  props = {
    ...props,
    colors,
    setColors,
    controller,
    setController,
  };

  return (
    <>
      {process.env.NODE_ENV === 'development' && <Dev {...props} />}

      <Meta {...props} />

      <GlobalStyles {...props} />

      {/* CMS */}
      {user?.isLoggedIn ? <Dashboard {...props} /> : <Nav {...props} />}

      <Main {...props} />
    </>
  );
}

import { Dev, GlobalStyles, Main, Meta, Nav } from './';
import { Dashboard } from './';
import { useColors } from 'lib/useColor';
import useUser from 'lib/useUser';

export function Layout({ ...props }) {
  const { user } = useUser();
  const { colors, setColors } = useColors();

  props = {
    ...props,
    colors,
    setColors,
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

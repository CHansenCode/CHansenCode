import { useState, useEffect } from 'react';
import { Dev, GlobalStyles, Main, Meta, Nav } from './';
import { Dashboard } from './';
import { useColors } from 'lib/useColor';
import useUser from 'lib/useUser';
import { useRouter } from 'next/router';
import axios from 'axios';

export function Layout({ ...props }) {
  const { pathname } = useRouter();
  const { user, mutateUser } = useUser();
  const { colors, setColors } = useColors();

  const [controller, setController] = useState({
    isLoggedIn: false,
    dashboardVisible: true,
  });

  useEffect(() => {
    user?.isLoggedIn
      ? setController({ ...controller, isLoggedIn: true })
      : setController({ ...controller, isLoggedIn: false });
  }, [user]);

  useEffect(() => {
    checkUser();
  }, [pathname]);

  async function checkUser() {
    const { data } = await axios.get('./api/user');
    if (data.isLoggedIn) {
      mutateUser(data);
    }
  }

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

      {user?.isLoggedIn ? <Dashboard {...props} /> : <Nav {...props} />}

      <Main {...props} />
    </>
  );
}

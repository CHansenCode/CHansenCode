import { useState, useEffect } from 'react';
import { GlobalStyles, Main, Meta, Nav, Dashboard } from './';
import { Dev, Toast, Footer } from './';
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
    !user && checkUser();
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

      <Toast />

      <Meta {...props} />
      <GlobalStyles {...props} />

      {controller.isLoggedIn ? <Dashboard {...props} /> : <Nav {...props} />}

      <Main {...props} />

      {!user?.isLoggedIn && <Footer />}
    </>
  );
}

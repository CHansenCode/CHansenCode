import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { useColors } from 'lib/useColor';
import useUser from 'lib/useUser';
import { checkUser } from 'lib/checkUser';

import { GlobalStyles, Main, Meta, Nav, Dashboard } from './';
import { Dev, Toast, Image } from './';

export function Layout({ ...props }) {
  const router = useRouter();
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
  }, [user, router]);
  useEffect(() => checkUser(mutateUser), [router, user]);
  useEffect(() => checkUser(mutateUser), []);

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

      {/* SETTINGS */}
      <Meta {...props} />
      <GlobalStyles {...props} />

      {/* MODALS */}
      <Toast />
      <Image.Modal />

      {router.pathname === '/viewer/cv' ||
      router.pathname === '/viewer/slides' ? (
        <></>
      ) : (
        <>
          {controller.isLoggedIn ? (
            <Dashboard {...props} />
          ) : (
            <Nav {...props} />
          )}
        </>
      )}

      <Main {...props} />

      {/* {!user?.isLoggedIn && <Footer />} */}
    </>
  );
}

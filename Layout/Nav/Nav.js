import css from './Nav.module.scss';

import { Links, Avatar } from './';
import { NextLink, Login } from 'components';
import { useRouter } from 'next/router';
import { Logo, Button } from 'chansencode-lib';

import useUser from 'lib/useUser';
import fetchJson from 'lib/fetchJson';

export function Nav() {
  //
  const { user, mutateUser } = useUser();
  const { pathname } = useRouter();

  return (
    <nav className={css.nav}>
      <div>
        {!(pathname === '/') && (
          <NextLink href="/">
            <Logo height="2rem" />
          </NextLink>
        )}
      </div>

      <div></div>

      <Links />

      <div>{user?.isLoggedIn ? <Avatar /> : <Login />}</div>

      {/* {user?.isLoggedIn ? <Avatar /> : <Login />} */}
    </nav>
  );
}

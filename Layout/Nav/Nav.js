import css from './Nav.module.scss';

import { Links, Avatar } from './';
import { NextLink, Login, Logo, Button } from 'components';
import { useRouter } from 'next/router';

import useUser from 'lib/useUser';

export function Nav() {
  //
  const { user } = useUser();
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
    </nav>
  );
}

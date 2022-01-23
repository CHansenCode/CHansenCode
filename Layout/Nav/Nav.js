import css from './Nav.module.scss';

import { Links } from './';
import { NextLink, Login } from 'components';
import { useRouter } from 'next/router';
import { Logo, Button } from 'chansencode-lib';

import useUser from 'lib/useUser';
import fetchJson from 'lib/fetchJson';

export function Nav() {
  //
  const { user, mutateUser } = useUser();
  const { pathname } = useRouter();

  async function logOut(e) {
    e.preventDefault();

    mutateUser(await fetchJson('/api/logout', { method: 'POST' }), false);
  }

  return (
    <nav className={css.nav}>
      <div>
        {!(pathname === '/') && (
          <NextLink href="/">
            <Logo height="2rem" />
          </NextLink>
        )}
      </div>

      <div style={{ display: 'flex' }}>
        <Button onClick={logOut}>Log out</Button>
        <h5>user: {user?.username}</h5>
      </div>

      <Links />

      <Login />
    </nav>
  );
}

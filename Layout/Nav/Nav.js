import css from './Nav.module.scss';

import { Links } from './';
import { NextLink, Login } from 'components';
import { useRouter } from 'next/router';
import { Logo } from 'chansencode-lib';

export function Nav() {
  //
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

      <Login />
    </nav>
  );
}

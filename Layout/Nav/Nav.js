import { useRouter } from 'next/router';

import { navConstr, navSubConstr } from 'config';
import { NavLink, Avatar, Dropdown } from './';
import { NextLink, Login, Logo, Button, Flex } from 'components';

import useUser from 'lib/useUser';

import css from './Nav.module.scss';

export function Nav() {
  //
  const { user } = useUser();
  const { pathname } = useRouter();

  return (
    <nav className={css.nav}>
      <>
        <div className={css.logo}>
          {!(pathname === '/') && (
            <NextLink href="/">
              <Logo height="4rem" />
            </NextLink>
          )}
        </div>

        <div />

        {/* <Links /> */}

        <Flex>
          {navConstr.map((l, i) => (
            <NavLink name={l.as} href={l.href} key={`cowie${i}`} />
          ))}
        </Flex>

        <Dropdown>
          {navSubConstr.map((l, i) => (
            <NavLink key={`cowie${i}`} name={l.as} href={l.href} />
          ))}
        </Dropdown>

        <div>{user?.isLoggedIn ? <Avatar /> : <Login />}</div>
      </>
    </nav>
  );
}

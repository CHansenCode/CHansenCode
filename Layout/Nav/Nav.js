import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { navMain, navSub } from 'config';
import { NavLink, Desktop, Mobile } from './';
import { Hamburger, Login, Logo, Button, Flex } from 'components';

import useUser from 'lib/useUser';

import css from './Nav.module.scss';

export function Nav() {
  const [viewLogin, setViewLogin] = useState(false);
  const [fullMenuOpen, setFullMenuOpen] = useState(false);
  //
  const { user } = useUser();
  const router = useRouter();

  async function goHome() {
    router.push('/');
  }
  async function toggleMenu() {
    setFullMenuOpen(!fullMenuOpen);
  }

  useEffect(() => {
    setFullMenuOpen(false);
  }, [router.pathname]);

  return (
    <nav className={css.nav}>
      <div className={css.inner}>
        <div className={css.logo} onClick={goHome}>
          <Logo height="3rem" onClick={goHome} />
        </div>

        <div className="empty_grid1fr_div" />

        <ul className={css.nav_main}>
          {navMain.map((l, i) => (
            <NavLink key={`navMain${i}`} as={l.as} href={l.href} />
          ))}
        </ul>

        <div className={css.nav_sub}>
          <Button height="2rem" width="2rem" text={`<`} onClick={toggleMenu} />
          <ul className={fullMenuOpen ? css.sub_open : css.sub_close}>
            {navSub.map((l, i) => (
              <NavLink key={`navMain${i}`} as={l.as} href={l.href} />
            ))}
          </ul>
        </div>

        <div className={css.login}>
          <div className={css.login_btn}>
            <Login />
          </div>

          <div className={css.hamburger}>
            <Hamburger ternary={fullMenuOpen} onClick={toggleMenu} />
          </div>
        </div>
      </div>
    </nav>
  );
}

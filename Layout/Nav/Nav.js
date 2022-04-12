import { useState } from 'react';
import { useRouter } from 'next/router';

import { navConstr, navSubConstr } from 'config';
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
  async function onNavigate() {
    setFullMenuOpen(false);
  }

  return (
    <nav className={css.nav}>
      <div className={css.inner}>
        <Desktop onGoHome={goHome}>
          <Logo height="4rem" />

          <ul className={css.main_links}>
            {navConstr.map((l, i) =>
              l.as === ('architecture' || 'webdesign') ? (
                <NavLink name={l.as} href={l.href} key={`cowie${i}`} />
              ) : (
                <></>
              ),
            )}
          </ul>
          <ul className={css.sub_links}>
            {navConstr.map(
              (l, i) =>
                !(l.as === ('architecture' || 'webdesign')) && (
                  <NavLink name={l.as} href={l.href} key={`cowie${i}`} />
                ),
            )}
          </ul>

          <Button text="login" />
          {viewLogin && <Login />}
        </Desktop>

        <div className={css.btn_toggleMenu}>
          <Hamburger size="3rem" ternary={fullMenuOpen} onClick={toggleMenu} />
        </div>

        <Mobile onGoHome={goHome} open={fullMenuOpen} onNavigate={onNavigate}>
          <ul className={css.main_links}>
            {navConstr.map(
              (l, i) =>
                l.name === ('architecture' || 'webdesign') && (
                  <NavLink name={l.as} href={l.href} key={`cowie${i}`} />
                ),
            )}
          </ul>
          <ul className={css.sub_links} onClick={() => setFullMenuOpen(false)}>
            {navConstr.map(
              (l, i) =>
                !(l.name === ('architecture' || 'webdesign')) && (
                  <NavLink name={l.as} href={l.href} key={`cowie${i}`} />
                ),
            )}
          </ul>

          {viewLogin && <Login />}
        </Mobile>
      </div>
    </nav>
  );
}

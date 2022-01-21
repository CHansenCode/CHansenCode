import css from './Nav.module.scss';

import { Logo } from 'chansencode-lib';

export function Nav() {
  return (
    <nav className={css.nav}>
      <div>
        <Logo />
      </div>

      <div>palce indicator etcx ?</div>

      <div>login buttons</div>
    </nav>
  );
}

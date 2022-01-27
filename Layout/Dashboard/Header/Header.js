import Link from 'next/link';

import { Logo } from 'components';
import useUser from 'lib/useUser';

import css from './Header.module.scss';

export const Header = ({}) => {
  const { user } = useUser();
  return (
    <header className={css.header}>
      <div className={css.logo}>
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
      </div>

      <div className={css.cmsText}>
        <p className="sc">
          <span>C</span>ontent
          <span>M</span>anagement
          <span>S</span>ystem
        </p>
      </div>

      <div className={css.loggedInAs}>
        <h6>Logged in as: </h6>
        <h4 className="sc">{user?.username}</h4>
      </div>
    </header>
  );
};

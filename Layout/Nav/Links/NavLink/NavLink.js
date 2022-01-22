import Link from 'next/link';
import { useRouter } from 'next/router';

import css from './NavLink.module.scss';

export const NavLink = ({ name, href, ...props }) => {
  const { pathname } = useRouter();

  const isActive = pathname.startsWith(href);

  return (
    <Link href={href}>
      <a {...props} className={`${css.a} ${isActive ? css.active : ''}`}>
        <li className={css.li}>{name}</li>
      </a>
    </Link>
  );
};

NavLink.defaultProps = {
  exact: false,
};

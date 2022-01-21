import Link from 'next/link';
import { useRouter } from 'next/router';

import css from './NextLink.module.scss';

export const NextLink = ({ bg, href, exact, ...props }) => {
  const { pathname } = useRouter();

  const isActive = exact ? pathname === href : pathname.startsWith(href);

  return (
    <Link href={href}>
      <a
        {...props}
        className={`${css.a} ${isActive ? 'sc' : ''} ${
          bg && isActive ? 'sc05bg' : ''
        }`}
      >
        {props.children}
      </a>
    </Link>
  );
};

NextLink.defaultProps = {
  exact: false,
};

import React from 'react';

import { NextLink } from 'components';
import { navConstr } from 'config';

import css from './Links.module.scss';

export const Links = () => {
  return (
    <ul className={css.ul}>
      {navConstr.map((l, i) => (
        <Link key={`nav${l.name}${i}`} name={l.name} href={l.href} />
      ))}
    </ul>
  );
};

const Link = ({ name, href }) => {
  return (
    <NextLink href={href}>
      <li className={`${css.li} pc5b`}>{name}</li>
    </NextLink>
  );
};

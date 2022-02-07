import React from 'react';

import { NavLink } from '.';
import { navConstr } from 'config';

import css from './Links.module.scss';

export const Links = () => {
  return (
    <ul className={css.ul}>
      {navConstr.map((l, i) => (
        <NavLink key={`nav${l.name}${i}`} name={l.as} href={l.href} />
      ))}
    </ul>
  );
};

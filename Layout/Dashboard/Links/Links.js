import React from 'react';

import css from './Links.module.scss';
import { NextLink } from 'components';

import { dashConstructor } from 'config/maps/dashboard.map';

export const Links = () => {
  return (
    <ul className={css.links}>
      {dashConstructor.map((cat, i) => (
        <div className={css.category} key={`navCat${i}`}>
          <h5 className="pc7">{cat.category} :</h5>

          {cat.pages.map((l, i) => (
            <NextLink exact={l.href === '/' && true} key={l.name} href={l.href}>
              <li className={css.link} key={`NextLink${i}`}>
                {l.name}
              </li>
            </NextLink>
          ))}
        </div>
      ))}
    </ul>
  );
};

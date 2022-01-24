import React from 'react';

import { Link } from './Link';

import css from './Links.module.scss';

export const Links = ({ ...props }) => {
  return (
    <div className={css.links}>
      {props.apps.map((a, i) => (
        <Link
          key={`link${a.id}`}
          active={props.activeId === a.id ? true : false}
          linkData={a}
          {...props}
        />
      ))}
    </div>
  );
};

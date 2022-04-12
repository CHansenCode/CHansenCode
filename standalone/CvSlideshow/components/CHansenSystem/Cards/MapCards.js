import React from 'react';

import { Card } from './Card';

import css from './style.module.scss';

export const MapCards = ({ apps, ...props }) => {
  //

  let ra = 0;
  let rb = 0;
  let rc = 0;
  apps.map(a => a.category === 'backside' && ra++);
  apps.map(a => a.category === 'content' && rb++);
  apps.map(a => a.category === 'consumer' && rc++);

  return (
    <div className={css.cards}>
      {apps.map(
        (a, i) =>
          a.category === 'backside' && (
            <Card data={a} key={a.id} left="10" i={i} {...props} />
          ),
      )}

      {apps.map(
        (a, i) =>
          a.category === 'content' && (
            <Card data={a} key={a.id} i={i} {...props} />
          ),
      )}

      {apps.map(
        (a, i) =>
          a.category === 'consumer' && (
            <Card data={a} key={a.id} i={i} {...props} />
          ),
      )}
    </div>
  );
};

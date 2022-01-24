import React from 'react';

import { Card } from './Card';

import css from './Cards.module.scss';

export const Cards = ({ ...props }) => {
  let backside = 0;
  let content = 0;
  let consumer = 0;

  props.apps &&
    props.apps.map((a, i) =>
      a.category === 'backside'
        ? backside++
        : a.category === 'content'
        ? content++
        : consumer++,
    );

  return (
    <div className={css.cards}>
      {props.apps.map((a, i) =>
        a.category === 'backside' ? (
          <Card
            key={`cardie${a.id}`}
            i={i}
            top={i + 1}
            left={10}
            cardData={a}
            {...props}
          />
        ) : a.category === 'content' ? (
          <>
            <Card
              key={`cardei${a.id}`}
              i={i}
              top={i - backside + 1}
              left={40}
              cardData={a}
              {...props}
            />
          </>
        ) : (
          <Card
            key={`cardi${a.id}`}
            i={i}
            top={i - backside - content + 1}
            left={70}
            cardData={a}
            {...props}
          />
        ),
      )}
    </div>
  );
};

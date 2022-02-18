import React from 'react';

import css from './Card.module.scss';

export const Card = ({ i, top, cardData, left, setActiveId, ...props }) => {
  //
  async function onClickSetActiveId() {
    setActiveId(cardData.id);
  }

  const istyle = {
    width: props.activeId ? '60%' : '20%',
    top: !props.activeId ? `${top * 10}rem` : `${10 + i * 2.5}rem`,
    left: props.activeId ? `10%` : `${left}%`,
  };

  return (
    <div
      className={`${css.card} bg pc1b`}
      style={istyle}
      onClick={onClickSetActiveId}
    >
      <h4
        className={`${css.role} ${props.activeId === cardData.id ? 'sc' : ''}`}
      >
        {cardData.role ? cardData.role : 'server'}
      </h4>

      <div className={css.constr}>
        {cardData.name === 'database' ? (
          <></>
        ) : (
          <>
            <h5 className={`${css.name} sc`}>{props.name}</h5>
            <h6 className={css.suffix}>{`.design`}</h6>
            <h6>{`/ ${cardData.prefix}`}</h6>
          </>
        )}
      </div>
    </div>
  );
};

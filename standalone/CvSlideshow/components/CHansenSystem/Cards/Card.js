import React from 'react';

import css from './style.module.scss';

export const Card = ({ i, left, data, setActiveId, ...props }) => {
  //
  async function onClickSetActiveId() {
    setActiveId(data.id);
  }

  let active = props.activeId === data.id ? true : false;

  left = data.category === 'backside' ? 10 : left;
  left = data.category === 'content' ? 40 : left;
  left = data.category === 'consumer' ? 70 : left;

  const istyle = {
    width: props.activeId ? '60%' : '20%',

    top: !props.activeId ? `${(i + 1) * 8}rem` : `${10 + i * 2.5}rem`,
    left: props.activeId ? `10%` : `${left}%`,
  };

  return (
    <div
      className={`${css.card} bg pc5b`}
      style={istyle}
      onClick={onClickSetActiveId}
    >
      <header>
        <h4 className={active ? 'sc' : ''}>{data.role}</h4>
      </header>

      <div>
        <>
          <p>{data.name}</p>
        </>
      </div>
    </div>
  );
};

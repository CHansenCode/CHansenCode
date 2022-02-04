import { useState } from 'react';
import { Button, Cimage } from 'components';

import css from './Item.module.scss';

export const Item = ({ data, ...props }) => {
  const [hover, setHover] = useState(false);

  async function hoverTrue() {
    setHover(true);
  }
  async function hoverFalse() {
    setHover(false);
  }

  return (
    <li
      className={`pc3b ${css.item}${hover ? ' sc sc7b' : ''}${` ${
        props.className ? props.className : ''
      }`}`}
      onMouseEnter={hoverTrue}
      onMouseLeave={hoverFalse}
      onClick={props.onClick}
    >
      <div style={{ height: '2rem', width: '2rem', overflow: 'hidden' }}>
        <Cimage height="100%" width="100%" src={`${data.url}`} layout="fill" />
      </div>

      <p>{data.title}</p>
      <p>{data.category}</p>
      <p>{data.project}</p>

      {props.controller.isDeleting ? (
        <Button text="X" onClick={props.onDelete} />
      ) : (
        <div></div>
      )}
    </li>
  );
};

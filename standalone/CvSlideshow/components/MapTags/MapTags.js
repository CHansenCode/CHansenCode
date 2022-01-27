import React from 'react';

import { Label } from '..';

import css from './MapTags.module.scss';

export const MapTags = ({ title, arr }) => {
  return (
    <div className={css.wrapper}>
      <Label label={title} />

      <div className={css.tag_wrapper}>
        {arr && arr.map((t, i) => <Tag key={`tag${t}${i}`} text={t} />)}
      </div>
    </div>
  );
};

const Tag = ({ text }) => {
  return <h5 className={`pc3b ${css.tag}`}>{text}</h5>;
};

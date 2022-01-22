import React from 'react';

import css from './Empty.module.scss';

export const Empty = ({ ...props }) => {
  //
  const iStyle = {
    height: props.height && props.height,
  };

  return <div style={iStyle} className={css.empty} />;
};

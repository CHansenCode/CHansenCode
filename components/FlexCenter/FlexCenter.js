import React from 'react';

import css from './FlexCenter.module.scss';

export const FlexCenter = ({ ...props }) => {
  const iStyle = {
    height: props.height && props.height,
    width: props.width && props.width,
    padding: props.padding && props.padding,
    margin: props.margin && props.margin,
  };

  return (
    <div style={iStyle} className={css.wrapper}>
      {props.children}
    </div>
  );
};

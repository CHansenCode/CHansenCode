import React from 'react';

import css from './Flex.module.scss';

export const Flex = ({ ...props }) => {
  const iStyle = {
    height: props.height && props.height,
    width: props.width && props.width,
    maxWidth: props.maxWidth && props.maxWidth,
    padding: props.padding && props.padding,
    margin: props.margin && props.margin,
    flexDirection: props.flexDirection && props.flexDirection,
    alignItems: props.center && 'center',
    justifyContent: props.center && 'center',
  };

  return (
    <div style={iStyle} className={css.wrapper}>
      {props.children}
    </div>
  );
};

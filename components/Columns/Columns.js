import React from 'react';

import css from './Columns.module.scss';

export const Columns = ({ children, ...props }) => {
  const iStyle = {
    margin: props.margin && props.margin,
    padding: props.padding && props.padding,
    minHeight: props.minHeight && props.minHeight,
    width: props.width && props.width,

    gridTemplateColumns: `repeat(${children.length}, 1fr)`,
    gap: props.gap && props.gap,
  };

  console.log(children.length);

  props.style = {
    ...props.style,
    ...iStyle,
  };

  return (
    <div
      style={props.style}
      className={`${css.div}${props.className ? ` ${props.className}` : ''}`}
      {...props}
    >
      {children}
    </div>
  );
};

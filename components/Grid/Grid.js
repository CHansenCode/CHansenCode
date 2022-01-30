import React from 'react';

import css from './Grid.module.scss';

export const Grid = ({ children, ...props }) => {
  const iStyle = {
    margin: props.margin && props.margin,
    padding: props.padding && props.padding,
    minHeight: props.minHeight && props.minHeight,
    width: props.width && props.width,

    display: 'grid',
    gridTemplateColumns: `repeat(${children.length}, 1fr)`,
    gap: props.gap && props.gap,
  };

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

// gridTemplate: `${children && children.length * 'a '} / repeat(${
//     children && children.length + 1
//   }, 1fr)`,

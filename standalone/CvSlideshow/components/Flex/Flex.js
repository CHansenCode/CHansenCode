import React from 'react';

import css from './Flex.module.scss';

export const Flex = ({ children, ...props }) => {
  //
  const istyle = {
    height: props.height || (props.size && props.height) || props.size,
    width: props.width || (props.size && props.width) || props.size,
    margin: props.margin && props.margin,
    padding: props.padding && props.padding,
    justifyContent: props.justifyContent && props.justifyContent,
    alignItems: props.alignItems && props.alignItems,
  };

  return (
    <div style={{ ...istyle }} className={`${css.flex}`} {...props}>
      {children}
    </div>
  );
};

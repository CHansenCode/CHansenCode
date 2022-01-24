import { useState } from 'react';

import css from './Button.module.scss';

export const Button = ({ text, ...props }) => {
  const [hover, setHover] = useState(false);

  const iStyle = {
    border: props.border && props.border,
    padding: props.padding && props.padding,
    margin: props.margin && props.margin,
    width: props.width && props.width,
    heght: props.height && props.height,
    textTransform: props.uppercase && 'uppercase',
  };

  props.style = {
    ...props.style,
    ...iStyle,
  };

  props.className += ` pc5b ${css.button}${hover ? ` sc` : ''}`;

  return (
    <button
      ref={props.myRef}
      style={props.style}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...props}
    >
      {text}
      {props.children}
    </button>
  );
};

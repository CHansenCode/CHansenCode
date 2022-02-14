import { useState } from 'react';

import css from './Button.module.scss';

export const Button = ({ text, ...props }) => {
  const [hover, setHover] = useState(false);

  const iStyle = {
    border: props.border && props.border,
    borderRadius: props.borderRadius && props.borderRadius,
    padding: props.padding && props.padding,
    margin: props.margin && props.margin,
    width: props.size ? props.size : props.width && props.width,
    height: props.size ? props.size : props.height && props.height,
    textTransform: props.uppercase && 'uppercase',
    fontSize: props.fontSize && props.fontSize,
    //
    opacity: props.disabled && 0.5,
    pointerEvents: props.disabled ? 'none' : 'all',
  };

  props.style = {
    ...props.style,
    ...iStyle,
  };

  props.className += ` ${css.button}${hover ? ` sc` : ''}`;

  return (
    <button
      ref={props.myRef}
      style={props.style}
      className={props.className}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={props.onClick}
    >
      {text}
      {props.children}
    </button>
  );
};

import React from 'react';

import css from './Form.module.scss';

export const Form = ({ className, ...props }) => {
  //
  const iStyle = {
    padding: props.padding && props.padding,
    margin: props.margin && props.margin,
    height: props.height && props.height,
    border: props.border && props.border,
  };

  props.style = { ...props.style, ...iStyle };

  return (
    <form
      style={props.style}
      className={`pc5b bg ${css.form} ${className}`}
      onSubmit={props.onSubmit}
      {...props}
    >
      {props.title && <h4 className={css.title}>{props.title}</h4>}
      {props.children}
    </form>
  );
};

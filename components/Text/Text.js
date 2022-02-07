import React from 'react';

export const Text = ({ text, ...props }) => {
  switch (props.type) {
    case 'p':
      return <p>{text}</p>;
      break;
    default:
      return <p>{text}</p>;
      break;
  }
};

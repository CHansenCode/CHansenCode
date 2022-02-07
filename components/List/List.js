import React from 'react';

export const List = ({ children, ...props }) => {
  const iStyle = {
    ...props.style,
    width: props.width && props.width,
    border: props.border && props.border,
    padding: props.padding && props.padding,
    margin: props.margin && props.margin,
  };
  return (
    <>
      <ul style={iStyle} className="ul_flexwrap">
        {children}
      </ul>

      <style jsx>
        {`
          .ul_flexwrap {
            height: 100%;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
          }
        `}
      </style>
    </>
  );
};

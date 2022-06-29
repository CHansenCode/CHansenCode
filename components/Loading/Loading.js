import { useState, useEffect } from 'react';

import css from './Loading.module.scss';

export const Loading = ({ ...props }) => {
  switch (props.type) {
    case 'text':
      return <Text {...props} />;
    case 'circle':
      return <Circle {...props} />;
    default:
      return <Circle {...props} />;
  }
};

const Text = ({ text }) => {
  return <div className={css.text}>{text}</div>;
};

const Circle = ({ size, ...props }) => {
  const [loading, setLoading] = useState(0);
  //

  useEffect(() => {
    let interval = 20; // velocity/load

    const ticks = setInterval(() => {
      setLoading(loading - 1);
    }, interval);

    return () => {
      clearInterval(ticks);
    };
  }, [loading]);

  const iStyle = {
    height: size ? size : '3rem',
    width: size ? size : '3rem',
    overflow: 'hidden',
  };

  //relative to 'viewBox size'
  let strokeWidth = 300;
  let height = 300;
  let width = 300;
  let midPoint = 150;
  let radius = midPoint - 140;

  let strokeDasharray = radius * 2 * Math.PI;

  return (
    <div style={iStyle} className={css.circle}>
      <svg
        height="100%"
        width="100%"
        className={css.circle}
        viewBox={`-20 -20 ${height + 41} ${width + 41}`}
      >
        <circle
          ref={props.myRef}
          cx={midPoint}
          cy={midPoint}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDasharray * (loading / 100)}
          fill="transparent"
        />
      </svg>
    </div>
  );
};

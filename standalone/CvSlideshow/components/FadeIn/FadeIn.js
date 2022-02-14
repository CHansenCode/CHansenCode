import { useState, useEffect } from 'react';

export const FadeIn = ({ page, duration, easing, ...props }) => {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      !mount && setMount(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  let trans = `${duration ? duration : '0.3s'} ${easing ? easing : 'ease'}`;

  const iStyle = {
    height: '100%',
    width: '100%',
    opacity: mount ? '1' : '0',
    transition: trans,
  };

  return <div style={iStyle}>{props.children}</div>;
};

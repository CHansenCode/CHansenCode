import { useState } from 'react';

import css from './Section.module.scss';

export const Section = ({ title, children, ...props }) => {
  //
  const [loaded, setLoaded] = useState(false);

  //Fade in
  useState(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 400);
  }, []);

  const iStyle = {
    minHeight: props.full && '100vh',
    display: props.flex && 'flex',
    flexDirection: props.column && 'column',
    alignItems: props.center && 'center',
    justifyContent: props.center && 'center',
  };

  props.style = {
    ...props.style,
    ...iStyle,
  };

  props.className += ` ${css.section}${loaded ? ` ${css.loaded}` : ''}`;

  return (
    <section
      style={props.style}
      className={`${css.section} ${loaded ? css.loaded : ''}`}
      {...props}
    >
      {title && <div>{title}</div>}

      {children}
    </section>
  );
};

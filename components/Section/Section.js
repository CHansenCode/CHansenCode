import { useState } from 'react';

import css from './Section.module.scss';

export const Section = ({ title, children, ...props }) => {
  //
  const [loaded, setLoaded] = useState(false);

  //Fade in
  useState(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 500);
  }, []);

  return (
    <section className={`${css.section} ${loaded ? css.loaded : ''}`}>
      {title && <div>{title}</div>}

      {children}
    </section>
  );
};

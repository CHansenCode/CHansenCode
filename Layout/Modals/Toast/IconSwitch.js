import { useState, useEffect } from 'react';

import css from './Toast.module.scss';

export const IconSwitch = ({ type }) => {
  const [fade, setFade] = useState(false);
  useEffect(() => {
    setFade(true);
  }, []);

  const iStyle = {
    opacity: fade ? 1 : 0,
    transform: fade ? 'translateY(0rem)' : 'translateY(-2rem)',
  };

  switch (type) {
    case 'success':
      return (
        <div className={`success success-bg2 ${css.icon}`}>
          <p className="pc">✓</p>
        </div>
      );
    case 'warning':
      return (
        <div className={`warning warning-bg2 ${css.icon}`}>
          <p className="pc">!?</p>
        </div>
      );
    case 'alert':
      return (
        <div className={`alert-bg2 ${css.icon}`}>
          <p className="pc">!!</p>
        </div>
      );

    default:
      return <div className={css.icon}>X</div>;
  }
};

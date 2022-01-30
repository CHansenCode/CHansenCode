import { useEffect, useState } from 'react';

import css from './Toast.module.scss';

export function Toast({}) {
  const [toasts, setToasts] = useState([]);
  //

  const iStyle = {
    opacity: toasts.length > 0 ? 1 : 0,
  };

  return (
    <div style={iStyle} className={css.fixed}>
      {toasts &&
        toasts.map((t, i) => (
          <Card key={`toast${i}`} onClick={() => removeToast(t.message)}>
            <Icon status={t.status} />
            <h4>{t.message}</h4>
          </Card>
        ))}
    </div>
  );
}

const Card = ({ children }) => {
  return <div className={`bg ${css.card}`}>{children}</div>;
};

const template = {
  status: 'success', // can be: 'success', 'fail', 'error'
  message: 'message to display', //max 64 characters,
};

const Icon = ({ status }) => {
  const [fade, setFade] = useState(false);
  useEffect(() => {
    setFade(true);
  }, []);

  const iStyle = {
    opacity: fade ? 1 : 0,
    transform: fade ? 'translateY(0rem)' : 'translateY(-2rem)',
  };

  switch (status) {
    case 'success':
      return (
        <div className={css.icon} style={{ color: 'green' }}>
          <h3>✓</h3>
        </div>
      );
    case 'fail':
      return (
        <div className={css.icon} style={{ color: 'red' }}>
          <h3>!!</h3>
        </div>
      );
    case 'error':
      return (
        <div className={css.icon} style={{ color: 'orange' }}>
          <h3>!</h3>
        </div>
      );

    default:
      return <div></div>;
  }
};

const tryData = [];

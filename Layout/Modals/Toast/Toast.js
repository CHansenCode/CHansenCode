import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Card } from './Card';
import { DELETE_TOAST } from 'actions';

import css from './Toast.module.scss';

export function Toast({}) {
  const dispatch = useDispatch();

  const iStyle = {};

  const toasts = useSelector(store => store.toast);

  useEffect(() => {}, []);

  async function deleteToast() {
    dispatch({ type: DELETE_TOAST });
  }

  return (
    <div style={iStyle} className={css.fixed}>
      {toasts &&
        toasts.map((t, i) => (
          <Card
            data={t}
            key={`toast${i}`}
            onClick={() => deleteToast(t.message)}
          />
        ))}
    </div>
  );
}

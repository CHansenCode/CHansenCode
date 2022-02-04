import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { IconSwitch } from './IconSwitch';

import css from './Toast.module.scss';

export const Card = ({ data, ...props }) => {
  const dispatch = useDispatch();

  const [loaded, setLoaded] = useState(false);

  //on init fade in
  useEffect(() => {
    setLoaded(true);
  }, []);

  //after 4 seconds fade out
  useEffect(() => {
    setTimeout(() => {
      setLoaded(false);
    }, 4000);
  }, []);

  return (
    <div
      className={`pc1b bg ${css.card}${loaded ? ` ${css.card_loaded}` : ''}`}
      onClick={props.onClick}
    >
      <IconSwitch type={data.type} />

      <h5>{data.message}</h5>
    </div>
  );
};

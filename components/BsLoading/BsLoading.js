import { useState, useEffect } from 'react';
import { Loading } from 'components';

import css from './BsLoading.module.scss';

export const BsLoading = ({ text, gap }) => {
  const [mount, setMount] = useState(false);
  useEffect(() => setMount(true), []);

  return (
    <div className={`${css.wrapper}${mount ? ` ${css.mounted}` : ''}`}>
      <div style={{ gap: gap ? gap : '3rem' }}>
        <Loading />
        <h4>{text ? text : 'fetching data from server...'}</h4>
      </div>
    </div>
  );
};

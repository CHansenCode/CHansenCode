import { useState, useCallback } from 'react';

import { Background } from './Background';
import { MapPosts } from './Post/MapPosts';
import { Button } from '../';

import css from './Timeline.module.scss';

export const Timeline = ({ data, ...props }) => {
  const [scope, setScope] = useState(8);

  async function increaseScope() {
    setScope(scope - 1);
  }
  async function decreaseScope() {
    setScope(scope + 1);
  }

  return (
    <div className={css.timeline}>
      <div className={css.buttons}>
        <Button text="+" fontSize="2rem" onClick={increaseScope} />
        <Button text="-" fontSize="2rem" onClick={decreaseScope} />
      </div>

      <div>
        {data ? (
          <MapPosts data={data} scope={scope} setScope={setScope} {...props} />
        ) : (
          <div>'loading'</div>
        )}

        <Background scope={scope} />
      </div>
    </div>
  );
};

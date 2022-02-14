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
    <div className={`pc3b ${css.wrapper}`}>
      <div className={css.bg_and_posts}>
        {data ? (
          <MapPosts data={data} scope={scope} setScope={setScope} {...props} />
        ) : (
          <div>'loading'</div>
        )}

        <Background scope={scope} />
      </div>

      <PrevBtn onClick={increaseScope} />
      <NextBtn onClick={decreaseScope} />
    </div>
  );
};

const PrevBtn = ({ ...props }) => {
  return (
    <Button
      text="-"
      size="2rem"
      borderRadius="50%"
      className={`bg pc5b ${css.prev_btn}`}
      onClick={props.onClick}
    />
  );
};

const NextBtn = ({ ...props }) => {
  return (
    <Button
      text="+"
      size="2rem"
      borderRadius="50%"
      className={`bg pc5b ${css.next_btn}`}
      onClick={props.onClick}
    />
  );
};

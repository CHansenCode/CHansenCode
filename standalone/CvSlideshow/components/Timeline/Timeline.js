import { useState } from 'react';

import { Background } from './Background';
import { MapPosts } from './Post/MapPosts';
import { Button } from '../';

import css from './Timeline.module.scss';

import { occupation } from '../../data/occupation';

export const Timeline = ({ activeData, setActiveData, ...props }) => {
  //
  const [scope, setScope] = useState(8);

  async function onClickSubstract() {
    setScope(scope - 1);
  }
  async function onClickAdd() {
    setScope(scope + 1);
  }

  return (
    <div className={css.timeline}>
      <div className={css.buttons}>
        <Button text="+" fontSize="2rem" onClick={onClickAdd} />
        <Button text="-" fontSize="2rem" onClick={onClickSubstract} />
      </div>

      <div>
        <MapPosts
          data={occupation}
          setActiveData={setActiveData}
          scope={scope}
          setScope={setScope}
        />
        <Background scope={scope} />
      </div>
    </div>
  );
};

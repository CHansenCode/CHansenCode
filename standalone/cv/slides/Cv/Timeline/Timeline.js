import { useState } from 'react';

import { Backdrop } from './Backdrop/Backdrop';
import { Posts } from './Post/Posts';
import { AddYear, SubstractYear } from './Buttons';

import css from './Timeline.module.scss';

export const Timeline = ({ ...props }) => {
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
      <AddYear onClick={onClickAdd}>{`<`}</AddYear>

      <div>
        <Posts scope={scope} {...props} />
        <Backdrop scope={scope} {...props} />
      </div>

      <SubstractYear onClick={onClickSubstract}>{`<`}</SubstractYear>
    </div>
  );
};

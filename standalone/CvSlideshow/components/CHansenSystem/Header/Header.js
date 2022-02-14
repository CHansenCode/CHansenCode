import React, { useState, useEffect } from 'react';

import { Flex } from 'components';

import css from './Header.module.scss';

export const Header = ({ setName, ...props }) => {
  async function onInputChange(e, setData) {
    setData(e.target.value);
  }

  return (
    <header className={css.header}>
      <Flex>
        <h3 className="sc">Portfolio</h3>

        <MoreInfo {...props} />
      </Flex>
    </header>
  );
};

const MoreInfo = ({ ...props }) => {
  //
  const [open, setOpen] = useState(false);

  return (
    <div className={css.more_info}>
      <div>
        <h4>Info</h4>
        hover me!
      </div>

      <p className={`${css.p} ${open ? css.open : ''}`}>
        {/* {props.data.webdev.info ? props.data.webdev.info : 'cow'} */}
      </p>
    </div>
  );
};

import { useState, useEffect } from 'react';

import { Cards, Header, Details, ToggleWidth } from '.';

// import { apps } from './data';

import css from './Web.module.scss';

export const Web = ({ ...props }) => {
  const [name, setName] = useState('CHansen');
  const [activeId, setActiveId] = useState('');

  props = { ...props, name, setName, activeId, setActiveId };

  return (
    <div className={css.main}>
      <h4 className="sc">WEB</h4>
      {/* <Header {...props} />

      <ToggleWidth {...props}>
        <Cards {...props} />
        <Details {...props} />
      </ToggleWidth> */}
    </div>
  );
};

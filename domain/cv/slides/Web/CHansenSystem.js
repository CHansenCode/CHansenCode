import { useState, useEffect } from 'react';

import { Cards, Header, Details, ToggleWidth } from './';

// import { apps } from './data';

import css from './CHansenSystem.module.scss';

export const CHansenSystem = ({ ...props }) => {
  const [name, setName] = useState('CHansen');
  const [activeId, setActiveId] = useState('');

  props = { ...props, name, setName, activeId, setActiveId };

  return (
    <div className={css.main}>
      system
      {/* <Header {...props} />

      <ToggleWidth {...props}>
        <Cards {...props} />
        <Details {...props} />
      </ToggleWidth> */}
    </div>
  );
};

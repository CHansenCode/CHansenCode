import { useState, useEffect } from 'react';

import { MapCards, Details, ToggleWidth } from './';

import { apps } from './data';

import css from './CHansenSystem.module.scss';

export const CHansenSystem = ({ ...props }) => {
  const [name, setName] = useState('CHansen');
  const [activeId, setActiveId] = useState('');

  props = { ...props, apps, name, setName, activeId, setActiveId };

  return (
    <div className={css.main}>
      <header>
        <h3 className="sc">Portfolio selection :</h3>
      </header>

      <ToggleWidth {...props}>
        <MapCards {...props} />
        <Details {...props} />
      </ToggleWidth>
    </div>
  );
};

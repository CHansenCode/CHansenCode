import { useState, useEffect } from 'react';

import { Cards, Header, Details, ToggleWidth } from './';

import { apps } from './data';

import css from './CHansenSystem.module.scss';

export const CHansenSystem = ({ ...props }) => {
  const [name, setName] = useState('CHansen');
  const [activeId, setActiveId] = useState('');

  props = { ...props, apps, name, setName, activeId, setActiveId };

  return (
    <div className={css.main}>
      <header>
        <h3 className="sc">Portfolio - webdesign</h3>
      </header>

      {/* <Header {...props} /> */}

      <div className={css.test}>
        <h4>FEATURES:</h4>
        {apps.map((p, i) => (
          <div key={`p${i}${p.title}`}>cow</div>
        ))}
      </div>
    </div>
  );
};

{
  /* <ToggleWidth {...props}>
  <Cards {...props} />
  <Details {...props} />
</ToggleWidth>; */
}

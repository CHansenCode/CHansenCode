import { useState } from 'react';

import { Button } from 'components';

import css from './SectionMenu.module.scss';

export const SectionMenu = ({ children }) => {
  const [fold, setFold] = useState(true);

  return (
    <header className={css.header}>
      <div className={css.normal}>{children[0]}</div>

      <div className={css.folding_menu}>
        <div className={fold ? css.fold : css.unfold}>{children[1]}</div>

        <Button text="set" className="pc5b" onClick={() => setFold(!fold)} />
      </div>
    </header>
  );
};

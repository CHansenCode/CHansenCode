import { useState } from 'react';

import { Button } from 'components';
import { AiOutlineSetting } from 'react-icons/ai';

import css from './SectionMenu.module.scss';

export const SectionMenu = ({ children }) => {
  const [fold, setFold] = useState(true);

  return (
    <header className={css.header}>
      <div className={css.normal}>{children[0]}</div>

      <div className={css.folding_menu}>
        <div className={fold ? css.fold : css.unfold}>{children[1]}</div>

        <Button active={!fold} className="pc5b" onClick={() => setFold(!fold)}>
          <AiOutlineSetting size="1.5rem" />
        </Button>
      </div>
    </header>
  );
};

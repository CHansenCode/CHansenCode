import { Button } from 'components';

import css from './style.module.scss';

export const Header = ({ children }) => {
  return (
    <div className={css.listview_header}>
      <header>
        <div />
      </header>

      <div className={css.body}>
        <h5 className="sc">{`title :`}</h5>
        <p>{`category :`}</p>
        <p>{`project :`}</p>
        <p>{`Created at :`}</p>
      </div>
    </div>
  );
};

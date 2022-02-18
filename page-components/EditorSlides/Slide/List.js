import { New, Item } from '.';

import css from './style.module.scss';

export const List = ({ mapData, ...props }) => {
  return (
    <ul className={css.list}>
      {mapData.map((s, i) => (
        <Item data={s} key={s.id} i={i} {...props} />
      ))}

      <New {...props} />
    </ul>
  );
};

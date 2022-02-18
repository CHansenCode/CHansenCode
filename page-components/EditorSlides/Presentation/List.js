import { New, Item } from './';

import css from './style.module.scss';

export const List = ({ mapData, ...props }) => {
  return (
    <ul className={css.list}>
      {mapData.map((p, i) => (
        <Item key={p._id} data={p} {...props} />
      ))}

      <New {...props} />
    </ul>
  );
};

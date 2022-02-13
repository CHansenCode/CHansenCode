import { Button } from 'components';

import css from './List.module.scss';

export const Item = ({ data, ...props }) => {
  return (
    <li className={css.item} onClick={props.onClick}>
      <Button text={data.title ? data.title : 'no title'} />
    </li>
  );
};

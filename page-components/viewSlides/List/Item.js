import { Button } from 'components';

import css from './List.module.scss';

export const Item = ({ data, i, ...props }) => {
  return (
    <li className={`${css.item} pc1b`}>
      <Button className="pc5b" border="transparent" onClick={props.onClick}>
        <div>
          <h5>{i + 1} .</h5>
          <p className="sc">{data.title ? data.title : 'no title'}</p>
        </div>
      </Button>
    </li>
  );
};

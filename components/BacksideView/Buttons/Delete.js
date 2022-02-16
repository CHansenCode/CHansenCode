import { Button } from 'components';

import css from './style.module.scss';

export const Delete = ({ ...props }) => {
  return (
    <Button
      className={`pc3b ${css.button}`}
      text="DEL"
      onClick={props.onClick}
      disabled={props.disabled}
      active={props.active}
    />
  );
};

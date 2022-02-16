import { Button } from 'components';

import css from './style.module.scss';

export const Create = ({ ...props }) => {
  return (
    <Button
      className={`pc3b ${css.button}`}
      text="NEW"
      onClick={props.onClick}
      disabled={props.disabled}
      active={props.active}
    />
  );
};

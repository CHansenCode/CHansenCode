import { Button } from 'components';

import css from './style.module.scss';

export const Edit = ({ ...props }) => {
  return (
    <Button
      className={`pc3b ${css.button}`}
      text="EDIT"
      onClick={props.onClick}
      disabled={props.disabled}
      active={props.active}
    />
  );
};

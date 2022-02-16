import { AiOutlineSetting } from 'react-icons/ai';
import { Button } from 'components';

import css from './style.module.scss';

export const Settings = ({ ...props }) => {
  return (
    <Button
      className={`pc3b ${css.button}`}
      onClick={props.onClick}
      disabled={props.disabled}
      active={props.active}
    >
      <AiOutlineSetting size="1.5rem" />
    </Button>
  );
};

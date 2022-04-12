import { Button } from 'components';

export const Create = ({ ...props }) => {
  const isActive = props.controller.isCreating;
  return <Button text="NEW" onClick={props.onClick} active={isActive} />;
};

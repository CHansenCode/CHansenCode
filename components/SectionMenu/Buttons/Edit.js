import { Button } from 'components';

export const EDIT = ({ ...props }) => {
  //
  async function toggleIsEditing() {
    props.setController({
      ...props.controller,
      isEditing: !props.controller.isEditing,
    });
  }

  return <Button text="EDIT" onClick={() => toggleIsEditing()} />;
};

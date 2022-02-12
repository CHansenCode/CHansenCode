import { Button } from 'components';

export const Delete = ({ ...props }) => {
  //
  async function toggleIsDeleting() {
    props.setController({
      ...props.controller,
      isDeleting: !props.controller.isEditing,
    });
  }
  return <Button text="DEL" onClick={() => toggleIsDeleting()} />;
};

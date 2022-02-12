import { Button } from 'components';

export const Create = ({ ...props }) => {
  //
  async function toggleIsCreating() {
    props.setController({
      ...props.controller,
      isCreating: !props.controller.isCreating,
    });
  }

  return <Button text="ADD" onClick={() => toggleIsCreating()} />;
};

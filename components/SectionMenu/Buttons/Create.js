import { Button } from 'components';

import css from './style.module.scss';

export const Create = ({ ...props }) => {
  //
  async function toggleIsCreating() {
    props.setController({
      ...props.controller,
      isCreating: !props.controller.isCreating,
    });
  }

  return (
    <Button
      className={css.button}
      text="ADD"
      onClick={() => toggleIsCreating()}
    />
  );
};

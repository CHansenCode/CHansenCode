import { Button, Flex } from 'components';

import css from './Presentation.module.scss';

export const PresentationMenu = ({ ...props }) => {
  //
  async function notYet() {
    alert('not yet impl.');
  }
  return (
    <Flex className={css.menu} width="90%" justifyContent="center">
      <>
        <Button text="UBO" onClick={notYet} />
      </>
    </Flex>
  );
};

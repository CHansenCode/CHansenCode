import { Button, Flex } from 'components';

import css from './Presentation.module.scss';

export const PresentationMenu = ({ ...props }) => {
  //
  async function notYet() {
    alert('not yet impl.');
  }
  async function togglePublished() {
    props.setFormData({
      ...props.formData,
      published: !props.formData.published,
    });

    props.triggerPatch();
  }
  return (
    <Flex className={css.menu} width="90%" justifyContent="center">
      <>
        <Button
          text={props.formData.published ? 'published' : 'unpublished'}
          onClick={togglePublished}
        />
      </>
    </Flex>
  );
};

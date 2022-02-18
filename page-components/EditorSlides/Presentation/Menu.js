import { ButtonType, Flex } from 'components';

import css from './style.module.scss';

export const Menu = ({ ...props }) => {
  //
  async function goBack() {
    props.setActiveId('');
  }

  return (
    <div className={css.menu} width="100%" justifyContent="center">
      <ButtonType type="back" onClick={goBack} />
      <h4 style={{ whiteSpace: 'nowrap' }}>
        {props.formData && props.formData.title}
      </h4>
    </div>
  );
};

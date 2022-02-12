import { TypeInput, RichText, SlideGrid } from 'components';

import css from './Slide.module.scss';

export const Slide = ({ data, ...props }) => {
  return (
    <div className={css.wrapper}>
      <SlideGrid type={'horizontal'}>
        <TypeInput
          value="cow"
          onChange={e => e.preventDefault()}
          disabled={!props.controller.isEditing}
        />

        <RichText
          value={data.rich}
          formData={props.formData}
          setFormData={props.setFormData}
          objKey="rich"
        />

        <img src="https://media.chansen.design/placeholder.jpg" />
      </SlideGrid>
    </div>
  );
};

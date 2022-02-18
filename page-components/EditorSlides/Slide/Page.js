import { TypeInput, RichText, SlideGrid } from 'components';

import css from './style.module.scss';

export const Page = ({ data, ...props }) => {
  return (
    <div className={css.page}>
      <SlideGrid type={'horizontal'}>
        <TypeInput
          value="cow"
          onChange={e => e.preventDefault()}
          disabled={!props.controller.isEditing}
        />

        {data.rich && <RichText value={data.rich} objKey="rich" />}

        <img src="https://media.chansen.design/placeholder.jpg" />
      </SlideGrid>
    </div>
  );
};

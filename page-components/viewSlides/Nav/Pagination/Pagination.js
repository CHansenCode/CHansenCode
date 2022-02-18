import { Button } from 'components';
import { Dot } from './Dot';

import css from './Pagination.module.scss';

export const Pagination = ({ data, ...props }) => {
  //
  async function prevSlide() {
    props.setSlideIndex(props.slideIndex - 1);
  }
  async function nextSlide() {
    props.setSlideIndex(props.slideIndex + 1);
  }

  let prevDisabled = props.slideIndex === 0 ? true : false;
  let nextDisabled = props.slideIndex === data.slides.length - 1 ? true : false;

  return (
    <div className={css.pagination}>
      <Button
        border="transparent"
        text="<"
        onClick={() => prevSlide()}
        disabled={prevDisabled}
      />

      {data.slides.map((p, i) => (
        <Dot key={p.id} i={i} data={data} {...props}>
          o
        </Dot>
      ))}

      <Button
        border="transparent"
        text=">"
        onClick={() => nextSlide()}
        disabled={nextDisabled}
      />
    </div>
  );
};
